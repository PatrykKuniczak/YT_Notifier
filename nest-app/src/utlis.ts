import {HttpException} from "@nestjs/common";
import {Request, Response} from 'express';
import {SESSION_COOKIE_NAME} from "./constants";
import {ConfigService} from "@nestjs/config";

export const destroySession = (req: Request, res: Response, configService: ConfigService, status?: number) =>
    req.session.destroy((err: HttpException) => {
        if (err) {
            return res.status(500).send('Error on destroying session: ' + err.message)
        }

        req.logout((err: HttpException) => {
            return res.status(500).send('Error on destroying passport session: ' + err.message)
        })

        return res.clearCookie(SESSION_COOKIE_NAME).sendStatus(status).redirect(configService.get('FE_URL'));
    })
