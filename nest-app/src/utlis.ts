import {HttpException} from "@nestjs/common";
import {Response} from 'express';
import {SESSION_COOKIE_NAME} from "./constants";

export const destroySession = (res: Response, session: Record<string, any>, status?: number) => {
    session.destroy((err: HttpException) => {
        if (err) {
            return res.status(500).send('Error on destroying session: ' + err.message)
        }

        return res.clearCookie(SESSION_COOKIE_NAME).sendStatus(status);
    })
}