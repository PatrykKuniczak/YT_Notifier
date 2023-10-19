import { styled } from '@mui/system';

export const StyledNotificationButton = styled('button')(({ theme }) =>
  theme.unstable_sx({
    p: 1,

    background: 'transparent',

    '&:hover': {
      backgroundColor: 'background.grey',

      borderRadius: 2,
    },
  }),
);
