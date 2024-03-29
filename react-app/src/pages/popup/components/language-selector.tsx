import chevronDownIcon from '@assets/img/chevron-down-icon.svg';
import chevronUpIcon from '@assets/img/chevron-up-icon.svg';
import englishFlag from '@assets/img/english-flag.svg';
import polishFlag from '@assets/img/polish-flag.svg';
import useLanguageSwitch from '@hooks/use-language-switch';
import { changeLanguage, i18n, useTranslation } from '@internationalization';
import { Dropdown, Menu } from '@mui/base';
import { useTheme } from '@mui/system';
import { StyledListbox, StyledMenuButton, StyledMenuItem } from '@pages/popup/components/shared/dropdown';
import { StyledIcon } from '@pages/popup/components/shared/icon';
import { GLOBAL_TRANSITION_DURATION } from '@pages/popup/constant';
import { useState } from 'react';

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

  const setLanguage = useLanguageSwitch();

  const handleChangeLanguage = (language: string) => {
    changeLanguage(language);
    setLanguage(language);
  };

  return (
    <Dropdown onOpenChange={handleOpenChange}>
      <StyledMenuButton aria-label={t('aria-labels.openLanguageMenuButton')}>
        <StyledIcon src={languages[i18n.resolvedLanguage || 'en'].icon} alt={''} height={16} />
        <StyledIcon
          src={collapsed ? chevronUpIcon : chevronDownIcon}
          alt={''}
          width={16}
          height={16}
          sx={{
            filter: `${theme.palette.background.searchIconFilter}`,
            transition: `all ${GLOBAL_TRANSITION_DURATION} ease`,
          }}
        />
      </StyledMenuButton>
      <Menu slots={{ listbox: StyledListbox }}>
        {Object.keys(languages).map(language => (
          <StyledMenuItem
            key={language}
            sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
            onClick={() => handleChangeLanguage(language)}
            aria-label={languages[language].nativeName}>
            <StyledIcon src={languages[language].icon} alt={''} height={16} />
            {t(`languages.${language}`)}
          </StyledMenuItem>
        ))}
      </Menu>
    </Dropdown>
  );
};

export default LanguageSelector;
