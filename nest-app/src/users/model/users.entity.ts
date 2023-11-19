import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, Relation } from 'typeorm';
import { ErrorLogsEntity } from '../../error-logs/model/error-logs.entity';
import { KeyWordEntity } from '../../key-words/model/key-word.entity';
import { UserYtVideosEntity } from '../../user-yt-videos/model/user-yt-videos.entity';

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

  @OneToOne(() => UserYtVideosEntity, userYtVideos => userYtVideos.user, {
    onDelete: 'CASCADE',
  })
  readonly userYtVideos: Relation<UserYtVideosEntity>;

  @OneToMany(() => KeyWordEntity, keyword => keyword.user, {
    cascade: true,
  })
  readonly keywords: Relation<KeyWordEntity[]>;

  @OneToMany(() => ErrorLogsEntity, errorLogs => errorLogs.user, {
    cascade: true,
  })
  readonly errorLogs: Relation<ErrorLogsEntity[]>;
}
