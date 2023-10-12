import { Stack, styled } from '@mui/system';
import { TVoid } from '@root/utils/types/types';
import { StyledTitle } from '@pages/popup/components/shared/title-header';
import { StyledModalButton } from '@pages/popup/components/store/delete-modal/delete-modal-button';

const ModalContentStyles = styled(Stack)(({ theme }) =>
	theme.unstable_sx({
		width: 220,
		height: 220,

		borderRadius: 1,

		backgroundColor: 'background.primary',
	}),
);

export const StyledModalContent = ({ changeModalVisibility }: { changeModalVisibility: TVoid }) => (
	<ModalContentStyles justifyContent={'center'} alignItems={'center'} useFlexGap={true} spacing={2}>
		<StyledTitle sx={{ fontSize: 'fontSize.l', color: 'color.secondary' }}>
			Czy jesteś pewien, że chcesz to usunąć?
		</StyledTitle>

		<StyledModalButton onClick={changeModalVisibility}>Tak, usuń</StyledModalButton>

		<StyledModalButton sx={{ backgroundColor: 'background.grey' }} onClick={changeModalVisibility}>
			Anuluj
		</StyledModalButton>
	</ModalContentStyles>
);
