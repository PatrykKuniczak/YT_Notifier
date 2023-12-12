import useFocus from '@hooks/use-focus';
import { useTranslation } from '@internationalization';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useHome = () => {
  const [title, setTitle] = useState('');

  const { pathname } = useLocation();

  const { ref, focus } = useFocus<HTMLInputElement>();

  const { t } = useTranslation();

  useEffect(() => {
    setTitle(pathname === '/store' ? t('savedKeywords') : t('foundVideos'));
  }, [pathname, t]);

  return { title, location, ref, focus };
};
