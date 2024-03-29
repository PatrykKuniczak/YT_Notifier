import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { TypeormStore } from 'connect-typeorm';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import helmet from 'helmet';
import passport from 'passport';
import { DataSource } from 'typeorm';
import { AppModule } from './app.module';
import { SessionsEntity } from './auth/sessions/model/sessions.entity';
import { COOKIE_MAX_AGE, SESSION_COOKIE_NAME, SESSION_TTL } from './constants';
import swaggerConfig from './swagger/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

  const configService = app.get(ConfigService);
  const sessionRepository = app.get(DataSource).getRepository(SessionsEntity);

  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          scriptSrc: ["'self'", "'unsafe-inline'"],
        },
      },
    }),
  );

  app.enableCors({
    origin: '*',
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
        secure: configService.get('COOKIE_SECURE') === 'true',
      },
      store: new TypeormStore({
        ttl: SESSION_TTL,
      }).connect(sessionRepository),
    }),
  );

  app.use(cookieParser(configService.get('SESSION_SECRET')));
  app.use(passport.initialize());
  app.use(passport.session());

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
    }),
  );

  IS_DEVELOPMENT && SwaggerModule.setup('api/docs', app, SwaggerModule.createDocument(app, swaggerConfig));

  await app.listen(configService.get('PORT') || 3000, '0.0.0.0');
}

bootstrap();
