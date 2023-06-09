import { styled } from '@mui/system';

export const StyledAvatar = styled('img')(({ theme, width, height }) =>
    theme.unstable_sx({
        size: { width, height },

        borderRadius: '50%'
    })
);
