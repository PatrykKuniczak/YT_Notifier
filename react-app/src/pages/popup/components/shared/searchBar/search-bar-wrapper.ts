import { styled } from '@mui/system';

export const StyledSearchBarWrapper = styled('form')(({ theme }) =>
  theme.unstable_sx({
    display: 'flex',
    alignItems: 'center',
    gap: 1,

    width: '100%',

    p: 0.5,

    borderRadius: 10,

    backgroundColor: 'background.searchBar',
  }),
);
