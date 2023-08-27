import {Controller, Get, Post, Res, UseGuards} from '@nestjs/common';
import {Response} from 'express';
import {GoogleAuthGuard} from './googleAuth/google.guard';
import {ConfigService} from "@nestjs/config";

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

    @Post('logout')
    logout(@Res({passthrough: true}) res: Response) {
        res.clearCookie(this.configService.get('SESSION_COOKIE_NAME'));
    }
}
