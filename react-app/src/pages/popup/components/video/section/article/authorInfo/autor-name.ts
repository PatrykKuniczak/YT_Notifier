import { styled } from '@mui/system';
import { textMixin } from '@utils/data/mixins/text-mixin';

export const StyledAuthorName = styled('p')(({ theme }) =>
  theme.unstable_sx({
    ...textMixin,

    width: 'fit-content',

    fontSize: 'fontSize.md',
  }),
);
