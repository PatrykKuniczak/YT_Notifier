import { StyledAuthWrapper } from './auth-wrapper.tsx';
import { StyledTitle } from '../../components/shared/title-header.ts';
import { StyledThemeSwitch } from '../../components/shared/theme-switch.tsx';
import { GoogleLogin } from '@react-oauth/google';
import { useLocalStorage, useTernaryDarkMode } from 'usehooks-ts';

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

            {/*<GoogleLogin*/}
            {/*    onSuccess={async credentialResponse => {*/}
            {/*        // await verifyToken(credentialResponse.credential!);*/}
            {/*        console.log(credentialResponse);*/}
            {/*    }}*/}
            {/*    onError={() => {*/}
            {/*        console.log('Login Failed');*/}
            {/*    }}*/}
            {/*    theme={isDarkMode ? 'filled_black' : 'filled_blue'}*/}
            {/*    ux_mode={'popup'}*/}
            {/*    shape={'circle'}*/}
            {/*    itp_support={true}*/}
            {/*    auto_select={true}*/}
            {/*/>*/}
        </StyledAuthWrapper>
    );
};
export default AuthPage;
