import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm';
import typeOrmConfig from './database/config/typeorm.config';
import {UserModule} from './user/user.module';
import {AuthModule} from './auth/auth.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true
        }),
        TypeOrmModule.forRootAsync(typeOrmConfig),
        UserModule,
        AuthModule
    ]
})
export class AppModule {
}
