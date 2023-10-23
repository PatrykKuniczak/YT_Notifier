import { styled } from '@mui/system';

export const StyledNotificationContent = styled('p')(({ theme }) =>
  theme.unstable_sx({
    color: 'color.primary',

    fontSize: 'fontSize.md',
  }),
);
