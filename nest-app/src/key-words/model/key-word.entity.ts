import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Relation } from 'typeorm';
import { UserYtVideosEntity } from '../../user-yt-videos/model/user-yt-videos.entity';

@Entity('key-word')
export class KeyWordEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({ length: 255 })
  readonly content: string;

  @Column()
  readonly userId: number;

  @OneToMany(() => UserYtVideosEntity, user => user.keywords)
  readonly user: Relation<UserYtVideosEntity>;
}
