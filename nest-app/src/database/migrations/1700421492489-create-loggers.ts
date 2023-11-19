import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateLoggers1700421492489 implements MigrationInterface {
  name = 'CreateLoggers1700421492489';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "error-logs" ("id" SERIAL NOT NULL, "errorValues" json NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_1a764472db9b0c9fd9c227c56b9" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "user-yt-videos" ALTER COLUMN "lastFetch" SET DEFAULT '"2023-11-12T19:18:13.045Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "error-logs" ADD CONSTRAINT "FK_134fc7e109049d179dfd37059ef" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "error-logs" DROP CONSTRAINT "FK_134fc7e109049d179dfd37059ef"`);
    await queryRunner.query(
      `ALTER TABLE "user-yt-videos" ALTER COLUMN "lastFetch" SET DEFAULT '2023-11-12 20:13:18.563+01'`,
    );
    await queryRunner.query(`DROP TABLE "error-logs"`);
  }
}
