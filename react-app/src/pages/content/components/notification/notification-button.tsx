import { styled } from '@mui/system';

export const StyledNotificationButton = styled('button')(({ theme }) =>
  theme.unstable_sx({
    p: 1,
    borderRadius: '50%',

    background: 'transparent',

    cursor: 'pointer',

    '&:hover': {
      backgroundColor: 'background.closeButtonHover',
    },

    '&:active': {
      backgroundColor: 'background.closeButtonActive',
    },

    transition: 'background-color 0.15s',
  }),
);
