import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useFocus from '../../hooks/use-focus.ts';

export const useHome = () => {
    const [title, setTitle] = useState('');

    const location = useLocation();

    const { ref, focus } = useFocus();

    useEffect(() => {
        setTitle(
            location.pathname === '/' ? 'Znalezione Wideo' : 'Zapisane Frazy'
        );
    }, [location.pathname]);

    return { title, location, ref, focus };
};
