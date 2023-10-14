import plusIcon from '@assets/img/plus-icon.svg';
import { FormControl } from '@mui/base';
import { styled } from '@mui/system';
import { StyledButton } from '@pages/popup/components/shared/button';
import { StyledErrorMessage } from '@pages/popup/components/shared/error';
import { StyledIcon } from '@pages/popup/components/shared/icon';
import StyledInput from '@pages/popup/components/shared/input';

const StyledForm = styled('form')(({ theme }) =>
	theme.unstable_sx({
		display: 'flex',
		alignItems: 'start',
		gap: 1,

		width: '100%',
	}),
);

const StyledSubmitButton = styled(StyledButton)(({ theme }) =>
	theme.unstable_sx({
		display: 'grid',
		placeItems: 'center',

		height: 'auto',

		p: 0.75,

		backgroundColor: 'background.purple',

		borderRadius: 1,
	}),
);

const StyledKeywordInput = styled(StyledInput)(({ theme }) =>
	theme.unstable_sx({
		display: 'flex',
		alignItems: 'center',
		gap: 1,

		width: '100%',

		px: 1.5,
		py: 1,

		backgroundColor: 'background.searchBar',
		color: 'color.primary',

		textAlign: 'left',

		borderRadius: 10,

		'&::placeholder': {
			color: 'color.placeholder',
		},
	}),
);

const StyledAddInput = () => {
	return (
		<StyledForm>
			<FormControl defaultValue="" required style={{ width: '100%', position: 'relative' }}>
				<StyledErrorMessage />
				<StyledKeywordInput placeholder="Dodaj słowo kluczowe" />
			</FormControl>
			<StyledSubmitButton type={'submit'}>
				<StyledIcon src={plusIcon} alt={'Add keyword'} width={20} height={20} />
			</StyledSubmitButton>
		</StyledForm>
	);
};

export default StyledAddInput;
