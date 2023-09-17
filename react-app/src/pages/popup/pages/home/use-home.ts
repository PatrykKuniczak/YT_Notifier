import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useFocus from "@pages/popup/hooks/use-focus";

export const useHome = () => {
    const [title, setTitle] = useState('');

    const { pathname } = useLocation();

    const { ref, focus } = useFocus();

    useEffect(() => {
        setTitle(
            pathname === '/videos' ? 'Znalezione Wideo' : 'Zapisane Frazy'
        );
    }, [pathname]);

    return { title, location, ref, focus };
};
