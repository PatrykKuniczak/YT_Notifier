import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Relation } from 'typeorm';
import { UsersEntity } from '../../user/model/users.entity';

@Entity('key-word')
export class KeyWordEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  content: string;

  @Column()
  userId: number;

  @OneToMany(() => UsersEntity, user => user.keywords)
  readonly user: Relation<UsersEntity>;
}
