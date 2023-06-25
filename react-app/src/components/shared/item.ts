import { Stack, styled } from '@mui/system';
import { TComponentTag } from '../../types/common.types.ts';
import { scrollbarMixin } from '../../data/mixins/scrollbar-mixin.ts';

export const StyledItem = styled(Stack)<TComponentTag>(({ theme }) =>
    theme.unstable_sx({
        ...scrollbarMixin,

        gap: 1,

        mb: 1,
        borderRadius: 1
    })
);
