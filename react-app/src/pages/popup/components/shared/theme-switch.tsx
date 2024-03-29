import useTernaryDarkMode from '@hooks/use-ternary-darkmode';
import { useTranslation } from '@internationalization';
import { useSwitch, UseSwitchParameters } from '@mui/base/useSwitch';
import { styled, SxProps } from '@mui/system';
import clsx from 'clsx';

export const StyledThemeSwitch = (props: UseSwitchParameters & { sx?: SxProps }) => {
  const { changeTheme, isDarkMode } = useTernaryDarkMode();
  const { getInputProps, checked, disabled, focusVisible } = useSwitch({
    ...props,
    checked: isDarkMode,
  });
  const { t } = useTranslation();

  const stateClasses = {
    checked,
    disabled,
    focusVisible,
  };

  return (
    <StyledSwitchRoot sx={props.sx}>
      <StyledSwitchTrack>
        <StyledSwitchThumb className={clsx(stateClasses)} />
      </StyledSwitchTrack>
      <StyledSwitchInput {...getInputProps()} aria-label={t('aria-labels.themeSwitch')} onClick={changeTheme} />
    </StyledSwitchRoot>
  );
};

const StyledSwitchRoot = styled('span')(({ theme }) =>
  theme.unstable_sx({
    position: 'relative',

    display: 'inline-block',

    width: 36,
    height: 20,
  }),
);

const StyledSwitchTrack = styled('div')(({ theme }) =>
  theme.unstable_sx({
    width: 36,
    height: 20,

    borderRadius: 10,

    backgroundColor: 'background.purple',
  }),
);

const StyledSwitchThumb = styled('span')(({ theme }) =>
  theme.unstable_sx({
    position: 'absolute',

    inset: 1,

    display: 'grid',
    placeItems: 'center',

    width: 18,
    height: 18,

    p: 0.2,
    borderRadius: '50%',

    backgroundColor: '#fff',

    transform: 'translateX(0px)',
    transition: 'transform .5s ease-in-out',

    '&.focusVisible': {
      backgroundColor: '#dcc8ff',
    },

    '&.checked': {
      transform: 'translateX(16px)',

      '&::before': {
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg width='16' height='15' viewBox='0 0 16 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.03096 3.69895C4.29318 3.43858 4.29333 3.01453 4.03131 2.75397L3.77728 2.50134C3.51713 2.24264 3.0967 2.24323 2.83728 2.50265V2.50265C2.57735 2.76258 2.57735 3.18402 2.83728 3.44396L3.09061 3.69729C3.35009 3.95677 3.77056 3.95751 4.03096 3.69895V3.69895ZM2.66663 7.66664C2.66663 7.29845 2.36815 6.99997 1.99996 6.99997H1.33329C0.965103 6.99997 0.666626 7.29845 0.666626 7.66664V7.66664C0.666626 8.03483 0.965103 8.3333 1.33329 8.3333H1.99996C2.36815 8.3333 2.66663 8.03483 2.66663 7.66664V7.66664ZM8.66663 1.0333C8.66663 0.665115 8.36815 0.366638 7.99996 0.366638V0.366638C7.63177 0.366638 7.33329 0.665115 7.33329 1.0333V1.66664C7.33329 2.03483 7.63177 2.3333 7.99996 2.3333V2.3333C8.36815 2.3333 8.66663 2.03483 8.66663 1.66664V1.0333ZM13.1633 3.4433C13.4229 3.18373 13.4229 2.76288 13.1633 2.5033V2.5033C12.9037 2.24373 12.4829 2.24373 12.2233 2.5033L11.97 2.75664C11.7104 3.01621 11.7104 3.43706 11.97 3.69664V3.69664C12.2295 3.95621 12.6504 3.95621 12.91 3.69664L13.1633 3.4433ZM11.96 11.64C11.702 11.8979 11.7014 12.3159 11.9587 12.5746L12.2179 12.8353C12.4766 13.0954 12.8973 13.096 13.1566 12.8366V12.8366C13.416 12.5773 13.4154 12.1566 13.1553 11.8979L12.8946 11.6387C12.6359 11.3814 12.2179 11.382 11.96 11.64V11.64ZM14 6.99997C13.6318 6.99997 13.3333 7.29845 13.3333 7.66664V7.66664C13.3333 8.03483 13.6318 8.3333 14 8.3333H14.6666C15.0348 8.3333 15.3333 8.03483 15.3333 7.66664V7.66664C15.3333 7.29845 15.0348 6.99997 14.6666 6.99997H14ZM7.99996 3.66664C5.79329 3.66664 3.99996 5.45997 3.99996 7.66664C3.99996 9.8733 5.79329 11.6666 7.99996 11.6666C10.2066 11.6666 12 9.8733 12 7.66664C12 5.45997 10.2066 3.66664 7.99996 3.66664ZM7.33329 14.3C7.33329 14.6682 7.63177 14.9666 7.99996 14.9666V14.9666C8.36815 14.9666 8.66663 14.6682 8.66663 14.3V13.6666C8.66663 13.2984 8.36815 13 7.99996 13V13C7.63177 13 7.33329 13.2984 7.33329 13.6666V14.3ZM2.83401 11.89C2.57567 12.1498 2.57625 12.5696 2.83532 12.8287V12.8287C3.0954 13.0887 3.51726 13.0882 3.77662 12.8273L4.03258 12.57C4.29091 12.3102 4.29033 11.8903 4.03127 11.6313V11.6313C3.77118 11.3712 3.34932 11.3718 3.08996 11.6326L2.83401 11.89Z' fill='%237846F0'/%3E%3C/svg%3E%0A\")",
      },
    },

    '&::before': {
      content: '""',

      display: 'block',

      width: '100%',
      height: '100%',

      backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg width='12' height='14' viewBox='0 0 12 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.00578 7.99668C3.81578 5.93553 4.06929 3.44128 5.44818 1.68293C5.84202 1.17842 5.31786 0.457208 4.70515 0.649298C3.99006 0.8774 3.29456 1.23276 2.6493 1.72847C0.245456 3.57821 -0.602111 6.92351 0.633202 9.6898C2.27858 13.3663 6.67635 14.7302 10.0712 12.7702C10.4926 12.5268 10.8701 12.2473 11.2185 11.9307C11.697 11.4928 11.3436 10.6807 10.7006 10.7671C8.41155 11.0956 6.15334 9.99764 5.00578 7.99668Z' fill='%237846F0'/%3E%3C/svg%3E\")",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'center',

      transition: 'background-image .5s ease-in-out',
    },
  }),
);

const StyledSwitchInput = styled('input')(({ theme }) =>
  theme.unstable_sx({
    position: 'absolute',
    zIndex: 1,

    inset: 1,

    width: '100%',
    height: '100%',

    opacity: 0,
    cursor: 'pointer',
  }),
);
