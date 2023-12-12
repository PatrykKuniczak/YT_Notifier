import { MigrationInterface, QueryRunner } from 'typeorm';

export class AfterDevelopment1699394971038 implements MigrationInterface {
  name = 'AfterDevelopment1699394971038';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "sessions" ("expiredAt" bigint NOT NULL, "id" character varying(255) NOT NULL, "json" text NOT NULL, "destroyedAt" TIMESTAMP, CONSTRAINT "PK_3238ef96f18b355b671619111bc" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(`CREATE INDEX "IDX_4c1989542e47d9e3b98fe32c67" ON "sessions" ("expiredAt") `);
    await queryRunner.query(
      `CREATE TABLE "user-yt-videos" ("id" SERIAL NOT NULL, "lastFetch" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT '"2023-10-31T22:09:31.596Z"', "playlistId" character varying, "userId" integer NOT NULL, CONSTRAINT "UQ_c55078fb686ab12973857ed9260" UNIQUE ("playlistId"), CONSTRAINT "REL_ee680dd5cc516620c38f321572" UNIQUE ("userId"), CONSTRAINT "PK_8b143cef766eb653d5849e7cf01" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "users" ("id" SERIAL NOT NULL, "displayName" character varying NOT NULL, "email" character varying NOT NULL, "avatar" character varying NOT NULL, "refreshToken" character varying NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "key-word" ("id" SERIAL NOT NULL, "content" character varying(255) NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_e6600151d3680783e0d4b796e98" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "user-yt-videos" ADD CONSTRAINT "FK_ee680dd5cc516620c38f3215729" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "key-word" ADD CONSTRAINT "FK_312c69579de5359eb3bd18e4732" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "key-word" DROP CONSTRAINT "FK_312c69579de5359eb3bd18e4732"`);
    await queryRunner.query(`ALTER TABLE "user-yt-videos" DROP CONSTRAINT "FK_ee680dd5cc516620c38f3215729"`);
    await queryRunner.query(`DROP TABLE "key-word"`);
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TABLE "user-yt-videos"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_4c1989542e47d9e3b98fe32c67"`);
    await queryRunner.query(`DROP TABLE "sessions"`);
  }
}
