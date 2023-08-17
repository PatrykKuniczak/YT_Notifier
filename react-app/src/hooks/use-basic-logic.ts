import useFocus from './use-focus.ts';
import { useState, KeyboardEvent } from 'react';
import { TVoid } from '../types/common.types.ts';
import { useSearchParams } from 'react-router-dom';

export const useBasicLogic = (defaultValue = '') => {
    const [value, setValue] = useState(defaultValue);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setSearchParams] = useSearchParams();

    const { ref, focus } = useFocus();

    const handleStateChange = (content: string) => {
        setValue(content);
        setSearchParams({ keyword: content });
    };

    const handleKeyEvent = (
        event: KeyboardEvent,
        escapeAction?: TVoid,
        enterAction?: TVoid
    ) => {
        if (escapeAction && event.key === 'Escape') escapeAction();
        if (enterAction && event.key === 'Enter') enterAction();
    };

    return {
        ref,
        focus,
        value,
        handleStateChange,
        handleKeyEvent
    };
};
