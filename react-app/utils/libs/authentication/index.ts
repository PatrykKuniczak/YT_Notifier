import { IUser } from '@interfaces';
import { createContext } from 'react';

interface IAuthContextValues {
  user: IUser;
  userIsLoading: boolean;
}

export const AuthContext = createContext<IAuthContextValues>(null);
