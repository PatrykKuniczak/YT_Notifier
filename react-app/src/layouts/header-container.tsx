import { Stack, styled } from '@mui/system';
import { StyledThemeSwitch } from '../components/shared/theme-switch.tsx';
import Profile from '../components/shared/profile.tsx';

const HeaderContainerStyles = styled(Stack)(({ theme }) =>
    theme.unstable_sx({
        justifyContent: 'space-between',
        alignItems: 'center',

        p: 1
    })
);

export const StyledHeaderContainer = () => {
    return (
        <HeaderContainerStyles direction={'row'}>
            <StyledThemeSwitch />

            <Profile />
        </HeaderContainerStyles>
    );
};
