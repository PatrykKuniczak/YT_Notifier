import { StyledAuthWrapper } from '../../components/auth/auth-wrapper.tsx';
import { StyledTitle } from '../../components/shared/title-header.ts';
import { StyledThemeSwitch } from '../../components/shared/theme-switch.tsx';
import { GoogleLogin } from '@react-oauth/google';
import { useLocalStorage, useTernaryDarkMode } from 'usehooks-ts';
import {
    StyledGoogleButton,
    StyledGoogleText,
    StyledGoogleIconWrapper
} from '../../components/auth/google.ts';
import googleLogo from '../../assets/google-icon.svg';

const AuthPage = () => {
    const { isDarkMode } = useTernaryDarkMode();
    // const [userAvatar, setUserAvatar] = useLocalStorage('userAvatar', '');

    // const client = new OAuth2Client();

    // const verifyToken = async (jwtToken: string) => {
    //     const ticket = await client.verifyIdToken({
    //         idToken: jwtToken,
    // audience: CLIENT_ID
    // });

    // const payload = ticket.getPayload();
    // const userid = payload['sub'];
    // setUserAvatar(picture);
    // console.log(payload);
    // };

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
