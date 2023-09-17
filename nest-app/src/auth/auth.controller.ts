import {Controller, Get, HttpCode, Post, Req, Res, UseGuards} from '@nestjs/common';
import {Request, Response} from 'express';
import {ConfigService} from "@nestjs/config";
import {SessionGuard} from "./session/session.guard";
import {destroySession} from "../utlis";
import {GoogleAuthGuard} from "./googleAuth/google.guard";

@Controller('auth')
export class AuthController {
    constructor(private readonly configService: ConfigService) {
    }

    @Get('login')
    @UseGuards(GoogleAuthGuard)
    async login(@Req() req: Request) {
    }

    @Get('redirect')
    @UseGuards(GoogleAuthGuard)
    async handleRedirect(@Res({passthrough: true}) res: Response) {
        console.log(res)
        res.redirect(this.configService.get('FE_URL'));
    }

    @Post('check')
    @HttpCode(200)
    @UseGuards(SessionGuard)
    async check() {
    }

    @Post('logout')
    @UseGuards(SessionGuard)
    logout(@Req() req: Request, @Res() res: Response) {
        destroySession(req, res, this.configService, 200)
    }
}
