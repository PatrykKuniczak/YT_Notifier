import { styled } from '@mui/system';
import { textMixin } from '@pages/popup/data/mixins/text-mixin';

export const StyledVideoTitle = styled('span')(({ theme }) =>
	theme.unstable_sx({
		...textMixin,

		alignSelf: 'start',

		maxWidth: 242,
		maxHeight: '3.2rem',
		lineHeight: '1.6rem',

		fontWeight: 'fontWeight.normal',
		fontSize: 'fontSize.md',
		textOverflow: 'ellipsis',
		wordWrap: 'break-all',

		overflow: 'hidden',
	}),
);
