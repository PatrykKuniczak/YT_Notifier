import { styled } from '@mui/system';

export const StyledSearchBarWrapper = styled('div')(({ theme }) =>
	theme.unstable_sx({
		display: 'flex',
		alignItems: 'center',
		gap: 1,

		width: '100%',

		p: 0.5,

		borderRadius: 10,

		backgroundColor: 'background.searchBar',
	}),
);
