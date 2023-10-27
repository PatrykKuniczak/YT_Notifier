import useFocus from '@hooks/use-focus';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useHome = () => {
  const [title, setTitle] = useState('');

  const { pathname } = useLocation();

  const { ref, focus } = useFocus<HTMLInputElement>();

  useEffect(() => {
    setTitle(pathname === '/videos' ? 'Znalezione Wideo' : 'Zapisane Frazy');
  }, [pathname]);

  return { title, location, ref, focus };
};
