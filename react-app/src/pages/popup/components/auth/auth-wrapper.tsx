import { Stack, styled } from '@mui/system';
import { pageMixin } from '@utils/data/mixins/page-mixin';

export const StyledAuthWrapper = styled(Stack)(({ theme }) =>
  theme.unstable_sx({
    ...pageMixin,

    p: 1,
    pt: 2.25,
  }),
);
