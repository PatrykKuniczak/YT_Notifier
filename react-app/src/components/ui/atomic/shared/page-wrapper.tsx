import { Stack, styled } from '@mui/system';

export const StyledPageWrapper = styled(Stack)(({ theme }) =>
    theme.unstable_sx({
        position: 'relative',

        width: 300,
        height: 600,

        backgroundColor: 'background.primary',

        transitionDuration: '0.5s'
    })
);
