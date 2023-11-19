import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Relation } from 'typeorm';
import { UsersEntity } from '../../users/model/users.entity';

@Entity('error-logs')
export class ErrorLogsEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column('json')
  readonly errorValues: object;

  @ManyToOne(() => UsersEntity, user => user.errorLogs, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  readonly user: Relation<UsersEntity>;
}
