import {CanActivate, ExecutionContext, Injectable} from '@nestjs/common';
import {SessionService} from './session.service';
import {destroySession} from "../../utlis";
import {ConfigService} from "@nestjs/config";

@Injectable()
export class SessionGuard implements CanActivate {
    constructor(private readonly sessionService: SessionService, private readonly configService: ConfigService) {
    }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const response = context.switchToHttp().getResponse();
        const sessionId = request.session.id;

        const result = await this.sessionService.validate(sessionId);

        if (!result) {
            destroySession(request, response, this.configService)
        }

        return result;
    }
}
