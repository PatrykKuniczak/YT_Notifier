import { MenuButton, MenuItem } from '@mui/base';
import { styled } from '@mui/system';

const StyledListbox = styled('ul')(({ theme }) =>
  theme.unstable_sx({
    position: 'absolute',

    right: '-30px',

    minWidth: '100px',

    margin: '12px 0',
    padding: '6px',
    border: `1px solid ${theme.palette.background.secondary}`,
    borderRadius: '12px',
    outline: 'transparent',

    backgroundColor: 'background.primary',
    color: 'color.primary',

    fontSize: 'fontSize.sm',

    boxShadow: `0px 4px 30px ${theme.palette.background.secondary}`,
  }),
);

const StyledMenuItem = styled(MenuItem)(({ theme }) =>
  theme.unstable_sx({
    padding: '8px',
    borderRadius: '8px',

    userSelect: 'none',
    cursor: 'pointer',
    listStyle: 'none',

    '&:hover:not(.Mui-disabled)': {
      backgroundColor: 'background.secondary',
    },

    '&.Mui-focusVisible': {
      outline: `1px solid #fff`,
      backgroundColor: 'background.secondary',
    },
  }),
);

const StyledMenuButton = styled(MenuButton)(({ theme }) =>
  theme.unstable_sx({
    display: 'flex',
    alignItems: 'center',
    gap: '.5rem',

    minHeight: 'calc(1.5em + 22px)',

    borderRadius: '12px',

    backgroundColor: 'transparent',

    cursor: 'pointer',
  }),
);

export { StyledListbox, StyledMenuItem, StyledMenuButton };
