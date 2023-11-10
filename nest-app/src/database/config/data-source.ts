import * as dotenv from 'dotenv';
import * as dotenvExpand from 'dotenv-expand';
import { DataSource } from 'typeorm';

dotenvExpand.expand(
  dotenv.config({
    path: `${process.cwd()}${process.env.NODE_ENV === 'production' ? '\\envs\\prod.env' : '\\envs\\local.env'}`,
  }),
);

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  extra: { charset: 'utf8mb4_unicode_ci' },
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/database/migrations/*.js'],
});
