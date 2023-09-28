import {Inject, Injectable, InternalServerErrorException, UnauthorizedException} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {SessionEntity} from "./session.entity";
import {Repository} from "typeorm";
import {Request} from "express";
import {OAuth2Client} from "google-auth-library";
import {UsersService} from "../../user/user.service";

@Injectable()
export class SessionService {
    constructor(@InjectRepository(SessionEntity) private readonly sessionRepository: Repository<SessionEntity>, @Inject('OAUTH2GOOGLE') private readonly oAuth2GoogleClient: OAuth2Client, private readonly usersService: UsersService) {
    }


    async validate(req: Request) {
        const sessionId = req.session.id;
        const session = await this.sessionRepository.findOneBy({id: sessionId});

        if (!session) {
            return false;
        }

        const expirationDateFromSessionCookie = new Date(JSON.parse(session.json).cookie.expires);
        const dateWith10SecDelay = new Date(new Date().getTime() + 10000);

        if (expirationDateFromSessionCookie < dateWith10SecDelay) {
            const userId = req.session.passport.user.id;

            const {refreshToken} = await this.usersService.getRefreshTokenById(userId);

            this.oAuth2GoogleClient.setCredentials({refresh_token: refreshToken});

            const {credentials} = await this.oAuth2GoogleClient.refreshAccessToken().catch((err) => {
                throw new UnauthorizedException(err.message)
            });

            this.oAuth2GoogleClient.setCredentials(credentials);

            const newDataForSession = JSON.parse(session.json);
            newDataForSession.cookie.expires = new Date(credentials.expiry_date);
            newDataForSession.passport.user.accessToken = credentials.access_token;

            if (credentials.refresh_token !== refreshToken) {
                const result = await this.usersService.updateRefreshToken(userId, credentials.refresh_token);

                if (!result) {
                    throw new InternalServerErrorException('Exception on trying update profile')
                }
            }

            const {affected} = await this.sessionRepository.update({id: sessionId}, {json: JSON.stringify(newDataForSession)});

            if (affected === 0) {
                throw new InternalServerErrorException('Exception on updating session')
            }
        }

        const currentTimestamp = new Date().getTime();

        return session.expiredAt > currentTimestamp && session.destroyedAt === null;
    }
}
