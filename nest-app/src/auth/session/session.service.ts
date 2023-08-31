import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {SessionEntity} from "./session.entity";
import {Repository} from "typeorm";

@Injectable()
export class SessionService {
    constructor(@InjectRepository(SessionEntity) private readonly sessionRepository: Repository<SessionEntity>) {
    }


    async validate(reqId: string): Promise<boolean> {
        const result = await this.sessionRepository.findOneBy({id: reqId});

        if (!result) {
            return false;
        }

        const currentTimestamp = new Date().getTime();

        return result.expiredAt > currentTimestamp && result.destroyedAt === null;
    }
}
