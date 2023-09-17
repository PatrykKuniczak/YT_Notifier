import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm';
import typeOrmConfig from './database/config/typeorm.config';
import {UserModule} from './user/user.module';
import {AuthModule} from './auth/auth.module';

// TODO: OGARNIJ TE ENV
@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: [`${process.cwd()}${process.env.NODE_ENV === 'production' ? '\\envs\\prod.env' : '\\envs\\local.env'}`,
                `${process.cwd()}\\envs\\.env`]
        }),
        TypeOrmModule.forRootAsync(typeOrmConfig),
        UserModule,
        AuthModule
    ]
})
export class AppModule {
}
