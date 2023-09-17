import { ReactNode } from 'react';

export type TChildren = { children: ReactNode };

export type TComponentTag = { component: string };

export type TVoid = () => void;

export type ValueOf<T> = T[keyof T];