import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Relation } from 'typeorm';
import { KeyWordEntity } from '../../key-words/entities/key-word.entity';

@Entity('users')
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  displayName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  avatar: string;

  @Column({ select: false })
  refreshToken: string;

  @ManyToOne(() => KeyWordEntity, keyword => keyword.user)
  keywords: Relation<KeyWordEntity[]>;
}
