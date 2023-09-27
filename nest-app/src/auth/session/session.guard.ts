import {CanActivate, ExecutionContext, Injectable, UnauthorizedException} from '@nestjs/common';
import {SessionService} from './session.service';

@Injectable()
export class SessionGuard implements CanActivate {
    constructor(private readonly sessionService: SessionService) {
    }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();

        const result = await this.sessionService.validate(request).catch((err) => {
            throw err
        });

        if (!result) {
            throw new UnauthorizedException()
        }

        return result
    }
}
