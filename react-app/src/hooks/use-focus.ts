import { useRef } from 'react';
import IUseFocus from '../interfaces/use-focus.interface.ts';

const useFocus = <T extends HTMLElement>(): IUseFocus<T> => {
    const ref = useRef<T | null>(null);

    const focus = (): void => {
        ref.current && ref.current.focus();
    };

    return { ref, focus };
};

export default useFocus;
