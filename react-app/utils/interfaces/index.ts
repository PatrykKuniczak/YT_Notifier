import { TVoid } from '@types';
import { Ref } from 'react';

interface IUseFocus<T extends HTMLElement> {
  ref: Ref<T>;
  focus: TVoid;
}

interface IKeyword {
  id: number;
  content: string;
}

interface IStyledKeyword extends IKeyword {
  openedInputId: number;
  changeOpenedInputId: (id: number) => void;
}

interface IStyledEditButton extends Omit<IStyledKeyword, 'content'> {}

interface IStyledStoreItem extends IStyledKeyword {
  setKeywordToRemove: (id: number) => void;
  changeModalVisibility: TVoid;
}

interface IUser {
  id: number;
  displayName: string;
  email: string;
  avatar: string;
  userYtVideos: IUserYtVideos;
}

interface IUserYtVideos {
  id: number;
  lastFetch: string;
  playlistId: string | null;
}

interface IEditKeywordRef {
  handleApplyingChanges: TVoid;
}

interface IErrorWithCause {
  response: {
    data: {
      cause?: string;
      reason?: string;
    };
  };
}

export {
  IUseFocus,
  IKeyword,
  IStyledKeyword,
  IStyledEditButton,
  IStyledStoreItem,
  IEditKeywordRef,
  IUser,
  IUserYtVideos,
  IErrorWithCause,
};
