import { Button } from '@mui/base/Button';
import { styled } from '@mui/system';

export const StyledGoogleButton = styled(Button)(({ theme }) =>
  theme.unstable_sx({
    display: 'flex',
    alignItems: 'center',

    width: '228px',
    height: '40px',

    borderRadius: 10,
    pl: '2px',

    backgroundColor: '#1a73e8',

    transition: 'background-color ease-in 0.15s',

    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#307aff',
    },

    '&:active': {
      backgroundColor: '#4285F4',
    },
  }),
);

export const StyledGoogleIconWrapper = styled('span')(({ theme }) =>
  theme.unstable_sx({
    display: 'grid',
    placeItems: 'center',

    width: '35px',
    height: '35px',

    mr: '10px',
    borderRadius: 10,

    backgroundColor: '#fff',
  }),
);

export const StyledGoogleText = styled('p')(({ theme }) =>
  theme.unstable_sx({
    color: '#fff',

    fontSize: '14px',
    fontWeight: '500',
    fontFamily: 'Roboto, sans-serif',

    letterSpacing: '0.3px',
  }),
);
