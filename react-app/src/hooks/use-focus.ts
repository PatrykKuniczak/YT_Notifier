import { useRef } from 'react';
import IUseFocus from '../interfaces/use-focus.interface.ts';

const useFocus = <T extends HTMLElement>(): IUseFocus<T> => {
    const ref = useRef<T | null>(null);

    const inputRef = ref.current && (ref.current.children[0] as T);

    const focus = (): void => {
        inputRef && inputRef.focus();
    };

    return { ref, focus };
};

export default useFocus;
