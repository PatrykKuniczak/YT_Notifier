import { IUser } from '@interfaces';
import { createContext } from 'react';

interface IAuthContextValues {
	user: IUser;
}

export const AuthContext = createContext<IAuthContextValues>(null);
