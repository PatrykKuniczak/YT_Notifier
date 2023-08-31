import {Controller, Get, HttpCode, Post, Res, Session, UseGuards} from '@nestjs/common';
import {Response} from 'express';
import {GoogleAuthGuard} from './googleAuth/google.guard';
import {ConfigService} from "@nestjs/config";
import {SessionGuard} from "./session/session.guard";
import {destroySession} from "../utlis";

@Controller('auth')
export class AuthController {
    constructor(private readonly configService: ConfigService) {
    }

    @Get('login')
    @UseGuards(GoogleAuthGuard)
    async login() {
    }

    @Get('redirect')
    @UseGuards(GoogleAuthGuard)
    async handleRedirect(@Res({passthrough: true}) res: Response) {
        res.redirect(this.configService.get('FE_URL'));
    }

    @Post('check')
    @HttpCode(200)
    @UseGuards(SessionGuard)
    async check() {
    }

    @Post('logout')
    @UseGuards(SessionGuard)
    logout(@Res() res: Response, @Session() session: Record<string, any>) {
        destroySession(res, session, 200)
    }
}
