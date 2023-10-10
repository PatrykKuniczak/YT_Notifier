import { styled } from '@mui/system';

export const StyledThumbnail = styled('img')(({ theme }) =>
    theme.unstable_sx({
        width: '100%',

        borderRadius: 1
    })
);
