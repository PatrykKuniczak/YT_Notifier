import { styled } from '@mui/system';
import clsx from 'clsx';
import { StyledButton } from '@pages/popup/components/shared/button';
import { TVoid } from '@root/utils/types/types';
import { StyledIcon } from '@pages/popup/components/shared/icon';
import editIcon from '@assets/img/edit-icon.svg';

const EditButtonStyles = styled(StyledButton)(({ theme }) =>
	theme.unstable_sx({
		position: 'relative',

		height: 18,

		'&::before': {
			content: '""',
			position: 'absolute',

			bottom: 0,

			width: 0,
			height: 3,

			mt: 1,
			borderRadius: 10,

			backgroundColor: '#7846F0',

			transition: 'width 0.3s ease-in-out',
		},

		'&.openedInput': {
			'&::before': {
				width: 14,
			},
		},
	}),
);
export const StyledEditButton = ({
	changeInputVisibility,
	openedInput,
}: {
	changeInputVisibility: TVoid;
	openedInput: boolean;
}) => (
	<EditButtonStyles className={clsx({ openedInput })} onClick={changeInputVisibility}>
		<StyledIcon src={editIcon} alt={'Edit Button'} />
	</EditButtonStyles>
);
