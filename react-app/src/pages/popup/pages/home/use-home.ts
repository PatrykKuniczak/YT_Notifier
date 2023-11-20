import useFocus from '@hooks/use-focus';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
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
