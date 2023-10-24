import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';
import { DataSource } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { SessionEntity } from '../../auth/session/session.entity';
import { KeyWordEntity } from '../../key-words/model/key-word.entity';
import { UsersEntity } from '../../user/model/users.entity';

const typeOrmConfig: TypeOrmModuleAsyncOptions = {
  inject: [ConfigService],
  useFactory: async (configService: ConfigService): Promise<PostgresConnectionOptions> => ({
    type: configService.get('DB_TYPE'),
    host: configService.get('DB_HOST'),
    port: +configService.get('DB_PORT'),
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_DATABASE'),
    extra: { charset: 'utf8mb4_unicode_ci' },
    entities: [UsersEntity, SessionEntity, KeyWordEntity],
    synchronize: true,
  }),
  dataSourceFactory: async options => new DataSource(options).initialize(),
};

export default typeOrmConfig;
