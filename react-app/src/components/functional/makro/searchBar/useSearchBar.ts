import useFocus from '../../../../hooks/use-focus.ts';
import { useState } from 'react';

export const useSearchBar = () => {
    const [searchContent, setSearchContent] = useState('');

    const { ref, focus } = useFocus();

    const handleContentChange = (content: string) => {
        setSearchContent(content);
    };

    const clearContent = () => {
        setSearchContent('');
    };

    return { ref, focus, searchContent, handleContentChange, clearContent };
};
