import { styled } from '@mui/system';

export const StyledNotificationContent = styled('p')(({ theme }) =>
  theme.unstable_sx({
    color: theme.palette.color.secondary,
  }),
);
