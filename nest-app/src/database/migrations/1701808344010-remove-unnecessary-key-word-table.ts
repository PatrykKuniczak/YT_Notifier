import { MigrationInterface, QueryRunner } from 'typeorm';

export class RemoveUnnecessaryKeyWordTable1701808344010 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "key-word"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
