import { MigrationInterface, QueryRunner } from 'typeorm';

export class ChangeErrorMessageType1701807327989 implements MigrationInterface {
  name = 'ChangeErrorMessageType1701807327989';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "error-logs" RENAME COLUMN "errorValues" TO "message"`);
    await queryRunner.query(`ALTER TABLE "error-logs" DROP COLUMN "message"`);
    await queryRunner.query(`ALTER TABLE "error-logs" ADD "message" text NOT NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "error-logs" DROP COLUMN "message"`);
    await queryRunner.query(`ALTER TABLE "error-logs" ADD "message" json NOT NULL`);
    await queryRunner.query(`ALTER TABLE "error-logs" RENAME COLUMN "message" TO "errorValues"`);
  }
}
