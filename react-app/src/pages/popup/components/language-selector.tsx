import chevronDownIcon from '@assets/img/chevron-down-icon.svg';
import chevronUpIcon from '@assets/img/chevron-up-icon.svg';
import englishFlag from '@assets/img/english-flag.svg';
import polishFlag from '@assets/img/polish-flag.svg';
import { Dropdown, Menu } from '@mui/base';
import { useTheme } from '@mui/system';
import { StyledButton } from '@pages/popup/components/shared/button';
import { StyledListbox, StyledMenuButton, StyledMenuItem } from '@pages/popup/components/shared/dropdown';
import { StyledIcon } from '@pages/popup/components/shared/icon';
import i18n, { changeLanguage } from 'i18next';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocalStorage } from 'usehooks-ts';

const languages = {
  en: { icon: englishFlag, nativeName: 'English' },
  pl: { icon: polishFlag, nativeName: 'Polish' },
};

const LanguageSelector = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleOpenChange = (_: unknown, open: boolean) => {
    setCollapsed(open);
  };

  const theme = useTheme();

  const { t } = useTranslation();

  const navigatorLanguage = new Intl.Locale(navigator.language).minimize().baseName;

  const [language, setLanguage] = useLocalStorage('language', navigatorLanguage === 'pl' ? navigatorLanguage : 'en');

  useEffect(() => {
    changeLanguage(language);
  }, [language]);

  const handleClick = (language: string) => {
    changeLanguage(language);
    setLanguage(language);
  };

  return (
    <Dropdown onOpenChange={handleOpenChange}>
      <StyledMenuButton aria-label={t('aria-labels.openLanguageMenuButton')}>
        <StyledIcon src={languages[i18n.resolvedLanguage].icon} alt={''} height={16} />
        <StyledIcon
          src={collapsed ? chevronUpIcon : chevronDownIcon}
          alt={''}
          width={16}
          height={16}
          sx={{
            filter: `${theme.palette.background.searchIconFilter}`,
          }}
        />
      </StyledMenuButton>
      <Menu slots={{ listbox: StyledListbox }}>
        {Object.keys(languages).map(language => (
          <StyledMenuItem key={language}>
            <StyledButton
              sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
              type="submit"
              onClick={() => handleClick(language)}
              aria-label={languages[language].nativeName}>
              <StyledIcon src={languages[language].icon} alt={''} height={16} />
              {t(`languages.${language}`)}
            </StyledButton>
          </StyledMenuItem>
        ))}
      </Menu>
    </Dropdown>
  );
};

export default LanguageSelector;
