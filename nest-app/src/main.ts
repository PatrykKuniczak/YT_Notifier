import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ConfigService} from '@nestjs/config';
import * as session from 'express-session';
import * as passport from "passport";
import * as cookieParser from "cookie-parser";
import {SESSION_COOKIE_NAME} from "./constants";


async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const configService = app.get(ConfigService);

    // TODO: ZROB 2 ENV
    app.enableCors({
        origin: configService.get('FE_URL'),
        credentials: true
    });

    app.setGlobalPrefix('api');

    app.use(passport.initialize());
    app.use(cookieParser())
    app.use(
        session({
            name: SESSION_COOKIE_NAME,
            secret: configService.get('SESSION_SECRET'),
            resave: false,
            saveUninitialized: false,
        })
    );

    await app.listen(configService.get('SERVER_PORT'));
}

bootstrap();
