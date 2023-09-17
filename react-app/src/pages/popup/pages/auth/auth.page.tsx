import googleLogo from '@src/assets/img/google-icon.svg';
import { StyledAuthWrapper } from '@pages/popup/components/auth/auth-wrapper';
import { StyledThemeSwitch } from '@pages/popup/components/shared/theme-switch';
import { StyledTitle } from '@pages/popup/components/shared/title-header';
import {
    StyledGoogleButton,
    StyledGoogleIconWrapper,
    StyledGoogleText
} from '@pages/popup/components/auth/google';

const AuthPage = () => {
    return (
        <StyledAuthWrapper
            direction={'column'}
            alignItems={'center'}
            useFlexGap={true}
            spacing={6}>
            <StyledThemeSwitch sx={{ alignSelf: 'start' }} />

            <StyledTitle>Witaj w YT Plugin</StyledTitle>

            <StyledGoogleButton>
                <StyledGoogleIconWrapper>
                    <img
                        src={googleLogo}
                        alt={'Google Logo'}
                    />
                </StyledGoogleIconWrapper>

                <StyledGoogleText>Zaloguj się przez Google</StyledGoogleText>
            </StyledGoogleButton>
        </StyledAuthWrapper>
    );
};
export default AuthPage;
