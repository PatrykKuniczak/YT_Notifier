import { UserYtVideosEntity } from '../user-yt-videos/model/user-yt-videos.entity';

export interface IUser {
  id: number;

  displayName: string;

  email: string;

  avatar: string;

  refreshToken: string;

  userYtVideos: UserYtVideosEntity;
}

export interface IProfile extends Pick<IUser, 'displayName'> {
  emails: { value: string; verified: boolean }[];
  photos: { value: string }[];
}
