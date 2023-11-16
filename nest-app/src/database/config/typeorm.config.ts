import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';
import { DataSource } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const typeOrmFactory: TypeOrmModuleAsyncOptions = {
  inject: [ConfigService],
  useFactory: async (configService: ConfigService): Promise<PostgresConnectionOptions> => ({
    type: 'postgres',
    host: configService.get('DB_HOST'),
    port: +configService.get('DB_PORT'),
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_DATABASE'),
    extra: { charset: 'utf8mb4_unicode_ci' },
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/database/migrations/*.js'],
    migrationsRun: process.env.NODE_ENV !== 'development',
    synchronize: process.env.NODE_ENV === 'development',
  }),
  dataSourceFactory: async options => new DataSource(options).initialize(),
};
