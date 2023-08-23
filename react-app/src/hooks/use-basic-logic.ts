import { KeyboardEvent } from 'react';
import { TVoid } from '../types/common.types.ts';

export const useBasicLogic = () => {
    const handleKeyEvent = (
        event: KeyboardEvent,
        escapeAction?: TVoid,
        enterAction?: TVoid
    ) => {
        if (escapeAction && event.key === 'Escape') escapeAction();
        if (enterAction && event.key === 'Enter') enterAction();
    };

    return {
        handleKeyEvent
    };
};
