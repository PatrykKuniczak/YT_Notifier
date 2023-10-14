import { Stack, styled } from '@mui/system';
import { StyledThemeSwitch } from '@pages/popup/components/shared/theme-switch';
import StyledProfile from '@pages/popup/components/shared/profile';

const HeaderContainerStyles = styled(Stack)(({ theme }) =>
	theme.unstable_sx({
		justifyContent: 'space-between',
		alignItems: 'center',

		px: 1,
		pt: 1,
	}),
);

export const StyledHeaderContainer = () => {
	return (
		<HeaderContainerStyles direction={'row'}>
			<StyledThemeSwitch />

			<StyledProfile />
		</HeaderContainerStyles>
	);
};
