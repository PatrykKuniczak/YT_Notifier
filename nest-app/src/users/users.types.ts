export interface IProfile {
  displayName: string;
  emails: { value: string; verified: boolean }[];
  photos: { value: string }[];
}
