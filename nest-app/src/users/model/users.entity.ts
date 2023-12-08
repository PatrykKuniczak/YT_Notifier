import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, Relation } from 'typeorm';
import { ErrorLogsEntity } from '../../error-logs/model/error-logs.entity';
import { KeyWordsEntity } from '../../key-words/model/key-words.entity';
import { UserYtVideosEntity } from '../../user-yt-videos/model/user-yt-videos.entity';

@Entity('users')
export class UsersEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({ nullable: false })
  readonly displayName: string;

  @Column({ unique: true, nullable: false })
  readonly email: string;

  @Column()
  readonly avatar: string;

  @Column({ select: false, nullable: false })
  readonly refreshToken: string;

  @OneToOne(() => UserYtVideosEntity, userYtVideos => userYtVideos.user, {
    onDelete: 'CASCADE',
  })
  readonly userYtVideos: Relation<UserYtVideosEntity>;

  @OneToMany(() => KeyWordsEntity, keyword => keyword.user, {
    cascade: true,
  })
  readonly keywords: Relation<KeyWordsEntity[]>;

  @OneToMany(() => ErrorLogsEntity, errorLogs => errorLogs.user, {
    cascade: true,
  })
  readonly errorLogs: Relation<ErrorLogsEntity[]>;
}
