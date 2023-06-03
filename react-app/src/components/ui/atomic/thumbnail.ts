import { styled } from '@mui/system';

export const StyledThumbnail = styled('img')(({ theme }) =>
    theme.unstable_sx({
        width: 242,
        height: 144,

        borderRadius: 2
    })
);
