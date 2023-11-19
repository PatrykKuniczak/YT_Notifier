import { MigrationInterface, QueryRunner } from 'typeorm';

export class RemoveDefaultDateFromLastFetch1700426454479 implements MigrationInterface {
  name = 'RemoveDefaultDateFromLastFetch1700426454479';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user-yt-videos" ALTER COLUMN "lastFetch" DROP NOT NULL`);
    await queryRunner.query(`ALTER TABLE "user-yt-videos" ALTER COLUMN "lastFetch" DROP DEFAULT`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user-yt-videos" ALTER COLUMN "lastFetch" SET DEFAULT '2023-10-31 23:09:31.596+01'`,
    );
    await queryRunner.query(`ALTER TABLE "user-yt-videos" ALTER COLUMN "lastFetch" SET NOT NULL`);
  }
}
