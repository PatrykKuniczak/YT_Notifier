import { Stack, styled } from '@mui/system';
import { StyledTitle } from '../shared/title-header.ts';
import { StyledModalButton } from '../../../functional/atomic/store/delete-modal/delete-modal-button.ts';
import { TVoid } from '../../../../types/common.types.ts';

const ModalContentStyles = styled(Stack)(({ theme }) =>
    theme.unstable_sx({
        width: 220,
        height: 220,

        borderRadius: 1,

        bgcolor: 'background.primary'
    })
);

export const StyledModalContent = ({
    changeModalVisibility
}: {
    changeModalVisibility: TVoid;
}) => (
    <ModalContentStyles
        justifyContent={'center'}
        alignItems={'center'}
        useFlexGap={true}
        spacing={2}>
        <StyledTitle sx={{ fontSize: 'fontSize.l', color: 'color.secondary' }}>
            Czy jesteś pewien, że chcesz to usunąć?
        </StyledTitle>

        <StyledModalButton onClick={changeModalVisibility}>
            Tak, usuń
        </StyledModalButton>

        <StyledModalButton
            sx={{ bgcolor: 'background.grey' }}
            onClick={changeModalVisibility}>
            Anuluj
        </StyledModalButton>
    </ModalContentStyles>
);
