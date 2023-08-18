import useFocus from './use-focus.ts';
import { useState, KeyboardEvent } from 'react';
import { TVoid } from '../types/common.types.ts';

export const useBasicLogic = (defaultValue = '') => {
    const [value, setValue] = useState(defaultValue);

    const { ref, focus } = useFocus();

    const handleStateChange = (content: string) => {
        setValue(content);
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
