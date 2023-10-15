import { styled } from '@mui/system';
import { textMixin } from '@pages/popup/data/mixins/text-mixin';

export const StyledTitle = styled('h1')(({ theme }) =>
  theme.unstable_sx({
    ...textMixin,

    p: 2,

    fontSize: 'fontSize.xl',
    fontWeight: 'fontWeight.bold',
  }),
);
