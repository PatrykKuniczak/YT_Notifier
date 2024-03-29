import { styled } from '@mui/system';
import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';

const SearchBarInputStyles = styled('input')(({ theme }) =>
  theme.unstable_sx({
    width: '100%',

    px: 1,
    borderRadius: 10,

    color: 'color.primary',
    background: 'transparent',

    '&:focus': {
      outline: `1.5px solid ${theme.palette.background.searchBarFocusOutline}`,
      outlineOffset: 1,
    },

    '&::placeholder': {
      color: 'color.placeholder',
    },
  }),
);

export const StyledSearchBarInput = forwardRef(
  (props: InputHTMLAttributes<HTMLInputElement>, ref: ForwardedRef<HTMLInputElement>) => {
    return <SearchBarInputStyles ref={ref} {...props} />;
  },
);
