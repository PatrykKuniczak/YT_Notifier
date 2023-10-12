import { createContext } from 'react';
import { IUser } from '@root/utils/interfaces/user.interface';

interface IAuthContextValues {
	user: IUser;
}

export const AuthContext = createContext<IAuthContextValues>(null);
