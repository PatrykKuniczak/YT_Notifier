import { changeLanguage } from 'i18next';
import { useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';

const useLanguageSwitch = () => {
  const navigatorLanguage = new Intl.Locale(navigator.language).minimize().baseName;

  const [language, setLanguage] = useLocalStorage('language', navigatorLanguage === 'pl' ? navigatorLanguage : 'en');

  useEffect(() => {
    changeLanguage(language);
  }, [language]);

  return setLanguage;
};

export default useLanguageSwitch;
