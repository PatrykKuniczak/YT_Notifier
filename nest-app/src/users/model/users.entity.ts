import { Column, Entity, OneToOne, PrimaryGeneratedColumn, Relation } from 'typeorm';
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
  userYtVideos: Relation<UserYtVideosEntity>;
}
