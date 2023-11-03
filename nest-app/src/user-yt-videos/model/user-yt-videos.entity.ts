import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Relation } from 'typeorm';
import { DEFAULT_FETCH_DATE } from '../../constants';
import { UsersEntity } from '../../users/model/users.entity';

@Entity('user-yt-videos')
export class UserYtVideosEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column('timestamptz', { default: DEFAULT_FETCH_DATE })
  readonly lastFetch: Date;

  @Column({ nullable: true, unique: true })
  readonly playlistId: string;

  @OneToOne(() => UsersEntity, user => user.userYtVideos, {
    cascade: true,
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  readonly user: Relation<UsersEntity>;
}
