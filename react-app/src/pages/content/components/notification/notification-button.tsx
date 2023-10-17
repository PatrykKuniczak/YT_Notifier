import { styled } from '@mui/system';

export const StyledNotificationButton = styled('button')(({ theme }) =>
  theme.unstable_sx({
    background: 'transparent',
  }),
);
