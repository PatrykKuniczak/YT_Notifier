import googleLogo from '@assets/img/google-icon.svg';
import { AuthContext } from '@authentication';
import { StyledAuthWrapper } from '@pages/popup/components/auth/auth-wrapper';
import { StyledGoogleButton, StyledGoogleIconWrapper, StyledGoogleText } from '@pages/popup/components/auth/google';
import { StyledThemeSwitch } from '@pages/popup/components/shared/theme-switch';
import { StyledTitle } from '@pages/popup/components/shared/title-header';
import { POPUP_HEIGHT, POPUP_POSITION_LEFT, POPUP_POSITION_TOP, POPUP_WIDTH } from '@pages/popup/constant';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigate } from 'react-router-dom';

const googleLogin = () =>
  chrome.windows.create({
    url: import.meta.env.VITE_API_URL + 'auth/login',
    type: 'popup',
    setSelfAsOpener: true,
    width: POPUP_WIDTH,
    height: POPUP_HEIGHT,
    top: POPUP_POSITION_TOP,
    left: POPUP_POSITION_LEFT,
  });

const AuthPage = () => {
  const { user } = useContext(AuthContext);

  const { t } = useTranslation();

  if (user) {
    return <Navigate to={'/'} />;
  }

  return (
    <StyledAuthWrapper direction={'column'} alignItems={'center'} useFlexGap={true} spacing={6}>
      <StyledThemeSwitch sx={{ alignSelf: 'start' }} />

      <StyledTitle>{t('welcome')}</StyledTitle>

      <StyledGoogleButton onClick={googleLogin}>
        <StyledGoogleIconWrapper>
          <img src={googleLogo} alt={''} />
        </StyledGoogleIconWrapper>

        <StyledGoogleText>{t('loginByGoogle')}</StyledGoogleText>
      </StyledGoogleButton>
    </StyledAuthWrapper>
  );
};
export default AuthPage;
