import { Stack, styled } from '@mui/system';
import { TComponentTag } from '@root/utils/types/types';
import { scrollbarMixin } from '@pages/popup/data/mixins/scrollbar-mixin';

export const StyledItemsContainer = styled(Stack)<TComponentTag>(({ theme }) =>
	theme.unstable_sx({
		...scrollbarMixin,

		gap: 1,

		mb: 1,
		borderRadius: 1,
	}),
);
