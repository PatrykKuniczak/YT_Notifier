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

interface IStyledKeyword {
  id: number;
  value: string;
  openedInput: boolean;
  changeInputVisibility: TVoid;
}

interface IUser {
  id: number;
  displayName: string;
  email: string;
  avatar: string;
}

export { IUseFocus, IKeyword, IStyledKeyword, IUser };
