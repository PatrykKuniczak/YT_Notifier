import { Stack, styled } from '@mui/system';
import { StyledThemeSwitch } from '../components/functional/atomic/theme-switch.tsx';
import { StyledAvatar } from '../components/ui/atomic/shared/avatar.ts';
import avatar from '../assets/thumbnail.png';

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
            <StyledAvatar
                src={avatar}
                alt={'Avatar'}
                width={40}
                height={40}
            />
        </HeaderContainerStyles>
    );
};
