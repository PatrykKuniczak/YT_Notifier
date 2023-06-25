import { Stack, styled } from '@mui/system';
import { pageMixin } from '../../data/mixins/page-mixin.ts';

export const StyledPageWrapper = styled(Stack)(({ theme }) =>
    theme.unstable_sx({
        ...pageMixin,

        position: 'relative',

        transitionDuration: '0.5s'
    })
);
