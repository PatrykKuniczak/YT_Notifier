import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Relation } from 'typeorm';
import { UsersEntity } from '../../users/model/users.entity';

@Entity('key-word')
export class KeyWordEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({ length: 255 })
  readonly content: string;

  @ManyToOne(() => UsersEntity, user => user.keywords, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  readonly user: Relation<UsersEntity>;
}
