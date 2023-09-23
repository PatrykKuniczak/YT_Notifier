import {Controller, Get, HttpCode, HttpException, Post, Req, Res, UseGuards} from '@nestjs/common';
import {Request, Response} from 'express';
import {GoogleAuthGuard} from './googleAuth/google.guard';
import {SessionGuard} from "./session/session.guard";
import {SESSION_COOKIE_NAME} from "../constants";

@Controller('auth')
export class AuthController {
    constructor() {
    }

    @Get('login')
    @UseGuards(GoogleAuthGuard)
    async login() {
    }

    @Get('redirect')
    @UseGuards(GoogleAuthGuard)
    async handleRedirect(@Res({passthrough: true}) res: Response) {
        const htmlContent =
            '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Redirect</title></head><body></body></html>';

        res.status(200).send(htmlContent);
    }

    @Post('me')
    @HttpCode(200)
    @UseGuards(SessionGuard)
    async authCheck() {
    }

    @Post('logout')
    @UseGuards(SessionGuard)
    logout(@Req() req: Request, @Res() res: Response) {
        req.logout((err: HttpException) => err && res.clearCookie(SESSION_COOKIE_NAME).status(500).send('Error on destroying passport session: ' + err.message));

        req.session.destroy((err: HttpException) => err && res.clearCookie(SESSION_COOKIE_NAME).status(500).send('Error on destroying session: ' + err.message));

        return res.clearCookie(SESSION_COOKIE_NAME).sendStatus(200);
    }
}
