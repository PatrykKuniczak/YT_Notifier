import { Stack, styled } from '@mui/system';
import { pageMixin } from '@utils/data/mixins/page-mixin';

export const StyledLoadingSpinnerWrapper = styled(Stack)(({ theme }) =>
  theme.unstable_sx({
    ...pageMixin,

    display: 'grid',
    placeItems: 'center',
  }),
);
