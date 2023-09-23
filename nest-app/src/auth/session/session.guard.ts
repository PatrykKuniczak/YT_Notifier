import {CanActivate, ExecutionContext, Injectable} from '@nestjs/common';
import {SessionService} from './session.service';

@Injectable()
export class SessionGuard implements CanActivate {
    constructor(private readonly sessionService: SessionService) {
    }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const sessionId = request.session.id;

        return this.sessionService.validate(sessionId);
    }
}
