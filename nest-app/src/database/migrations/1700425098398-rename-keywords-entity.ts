import { MigrationInterface, QueryRunner } from 'typeorm';

export class RenameKeywordsEntity1700425098398 implements MigrationInterface {
  name = 'RenameKeywordsEntity1700425098398';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "key-words" ("id" SERIAL NOT NULL, "content" character varying(255) NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_cce2c650266c3adf3f08724a6b0" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "user-yt-videos" ALTER COLUMN "lastFetch" SET DEFAULT '"2023-11-12T20:18:18.949Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "key-words" ADD CONSTRAINT "FK_3a45d0189d0eaacb1d025386899" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "key-words" DROP CONSTRAINT "FK_3a45d0189d0eaacb1d025386899"`);
    await queryRunner.query(
      `ALTER TABLE "user-yt-videos" ALTER COLUMN "lastFetch" SET DEFAULT '2023-10-31 23:09:31.596+01'`,
    );
    await queryRunner.query(`DROP TABLE "key-words"`);
  }
}
