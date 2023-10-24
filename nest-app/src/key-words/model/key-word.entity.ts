import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Relation } from 'typeorm';
import { UsersEntity } from '../../user/model/users.entity';

@Entity('key-word')
export class KeyWordEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({ length: 255 })
  readonly content: string;

  @Column()
  readonly userId: number;

  @OneToMany(() => UsersEntity, user => user.keywords)
  readonly user: Relation<UsersEntity>;
}
