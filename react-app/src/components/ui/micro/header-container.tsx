import { Stack } from '@mui/system';
import { StyledThemeSwitch } from '../../functional/atomic/theme-switch.tsx';
import { StyledAvatar } from '../atomic/avatar.ts';
import avatar from '../../../assets/thumbnail.png';

export const StyledHeaderContainer = () => {
    return (
        <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            sx={{ p: 1 }}>
            <StyledThemeSwitch />
            <StyledAvatar
                src={avatar}
                alt={'Avatar'}
                width={40}
                height={40}
            />
        </Stack>
    );
};
