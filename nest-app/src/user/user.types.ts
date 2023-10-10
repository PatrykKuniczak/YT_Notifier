export interface IUser {
    id: number;

    displayName: string;

    email: string;

    avatar: string;

    refreshToken: string;
}

export interface IProfile extends Pick<IUser, 'displayName'> {
    emails: { value: string; verified: boolean }[];
    photos: { value: string }[];
}
