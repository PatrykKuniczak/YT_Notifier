import { styled } from '@mui/system';

export const StyledThumbnail = styled('img')(({ theme }) =>
    theme.unstable_sx({
        width: 200,
        height: 100,

        borderRadius: 2
    })
);
