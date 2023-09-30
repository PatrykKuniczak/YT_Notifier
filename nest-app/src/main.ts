import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ConfigService} from '@nestjs/config';
import * as session from 'express-session';
import * as passport from "passport";
import * as cookieParser from "cookie-parser";
import {COOKIE_MAX_AGE, SESSION_COOKIE_NAME, SESSION_TTL} from "./constants";
import {DataSource} from "typeorm";
import {SessionEntity} from "./auth/session/session.entity";
import {TypeormStore} from "connect-typeorm";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const configService = app.get(ConfigService);
    const sessionRepository = app.get(DataSource).getRepository(SessionEntity);

    app.enableCors({
        origin: configService.get('FE_URL'),
        credentials: true,
    });

    app.setGlobalPrefix('api');

    app.use(
        session({
            name: SESSION_COOKIE_NAME,
            secret: configService.get('SESSION_SECRET'),
            resave: false,
            saveUninitialized: false,
            cookie: {
                maxAge: COOKIE_MAX_AGE,
                sameSite: 'lax',
                httpOnly: true,
                signed: true,
                secure: configService.get('COOKIE_SECURE') === 'true'
            },
            store: new TypeormStore({
                ttl: SESSION_TTL,
            }).connect(sessionRepository)
        })
    );

    app.use(cookieParser())
    app.use(passport.initialize());
    app.use(passport.session());

    await app.listen(configService.get('SERVER_PORT'));
}

bootstrap();
