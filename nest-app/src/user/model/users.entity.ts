import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Relation } from 'typeorm';
import { KeyWordEntity } from '../../key-words/model/key-word.entity';

@Entity('users')
export class UsersEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  readonly displayName: string;

  @Column({ unique: true })
  readonly email: string;

  @Column()
  readonly avatar: string;

  @Column({ select: false })
  readonly refreshToken: string;

  @ManyToOne(() => KeyWordEntity, keyword => keyword.user)
  readonly keywords: Relation<KeyWordEntity[]>;
}
