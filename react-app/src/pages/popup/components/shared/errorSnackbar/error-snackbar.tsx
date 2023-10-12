import { styled } from '@mui/system';

export const StyledSnackbar = styled('div')(({ theme }) =>
	theme.unstable_sx({
		position: 'absolute',
		zIndex: 5500,

		bottom: 16,
		left: 'auto',
		right: 16,

		display: 'flex',
		alignItems: 'center',
		justifyContent: 'start',
		gap: '0.5rem',

		width: 256,

		padding: '0.75rem',

		backgroundColor: theme.palette.background.snackbarBackground,
		color: theme.palette.color.snackbarContent,

		fontSize: '0.875rem',
		wordBreak: 'break-word',

		transition: 'transform 0.2s ease-out',

		borderRadius: 2,
	}),
);
