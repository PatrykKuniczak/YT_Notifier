import { Stack, styled } from '@mui/system';
import { scrollbarMixin } from '@utils/data/mixins/scrollbar-mixin';
import { TComponentTag } from '@types';

export const StyledItemsContainer = styled(Stack)<TComponentTag>(({ theme }) =>
  theme.unstable_sx({
    ...scrollbarMixin,

    gap: 1,

    mb: 1,
    borderRadius: 1,
  }),
);
