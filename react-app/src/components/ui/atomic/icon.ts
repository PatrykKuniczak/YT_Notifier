import { styled } from '@mui/system';

export const StyledIcon = styled('img')(({ theme, width, height }) =>
    theme.unstable_sx({
        width: width,
        height: height,

        filter: `${theme.palette.background.searchIconFilter}`
    })
);
