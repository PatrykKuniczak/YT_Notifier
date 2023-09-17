import { Stack, styled } from '@mui/system';
import { TComponentTag } from '@pages/popup/types/common.types';
import { scrollbarMixin } from '@pages/popup/data/mixins/scrollbar-mixin';

export const StyledItem = styled(Stack)<TComponentTag>(({ theme }) =>
    theme.unstable_sx({
        ...scrollbarMixin,

        gap: 1,

        mb: 1,
        borderRadius: 1
    })
);
