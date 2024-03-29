import { Stack, styled } from '@mui/system';
import { pageMixin } from '@utils/data/mixins/page-mixin';

export const StyledHomePageWrapper = styled(Stack)(({ theme }) =>
  theme.unstable_sx({
    ...pageMixin,

    position: 'relative',
  }),
);
