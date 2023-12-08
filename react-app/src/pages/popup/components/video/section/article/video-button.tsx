import { styled } from '@mui/system';
import { StyledButton } from '@pages/popup/components/shared/button';

export const StyledVideoButton = styled(StyledButton)(({ theme }) =>
  theme.unstable_sx({
    height: 'auto',
  }),
);
