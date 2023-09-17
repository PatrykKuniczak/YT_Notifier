import useFocus from './use-focus.ts';
import { useState } from 'react';

export const useEditKeyword = (defaultValue = '') => {
    const [previousValue, setPreviousValue] = useState(defaultValue);
    const [value, setValue] = useState(defaultValue);

    const { ref, focus } = useFocus();

    const handleStateChange = (content: string) => {
        setValue(content);
    };

    const handlePreviousValueChange = (content: string) => {
        setPreviousValue(content);
    };

    return {
        ref,
        focus,
        value,
        handleStateChange,
        previousValue,
        handlePreviousValueChange
    };
};
