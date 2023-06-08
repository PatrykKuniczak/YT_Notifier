import { styled } from '@mui/system';

export const StyledSearchIcon = styled('img')(({ theme, width, height }) =>
    theme.unstable_sx({
        width: width,
        height: height,

        filter: `${theme.palette.background.searchIconFilter}`
    })
);
