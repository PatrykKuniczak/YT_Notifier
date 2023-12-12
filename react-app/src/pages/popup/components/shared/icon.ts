import { styled } from '@mui/system';

export const StyledIcon = styled('img')(({ theme, width, height }) =>
  theme.unstable_sx({
    display: 'block',

    width: width,
    height: height,
  }),
);
