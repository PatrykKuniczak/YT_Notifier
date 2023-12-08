import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Relation } from 'typeorm';
import { UsersEntity } from '../../users/model/users.entity';

@Entity('key-words')
export class KeyWordsEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({ length: 255, nullable: false })
  readonly content: string;

  @ManyToOne(() => UsersEntity, user => user.keywords, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  readonly user: Relation<UsersEntity>;
}
