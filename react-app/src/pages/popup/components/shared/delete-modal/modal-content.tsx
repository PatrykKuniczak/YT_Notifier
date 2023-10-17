import { Stack, styled } from '@mui/system';
import { StyledTitle } from '@pages/popup/components/shared/title-header';
import { StyledModalButton } from '@pages/popup/components/shared/delete-modal/delete-modal-button';
import { TVoid } from '@types';
import { ReactNode } from 'react';

const ModalContentStyles = styled(Stack)(({ theme }) =>
  theme.unstable_sx({
    width: 220,
    height: 220,

    borderRadius: 1,

    backgroundColor: 'background.primary',
  }),
);

export const StyledModalContent = ({
  content,
  onConfirm,
  changeModalVisibility,
}: {
  content: ReactNode;
  onConfirm: TVoid;
  changeModalVisibility: TVoid;
}) => (
  <ModalContentStyles justifyContent={'center'} alignItems={'center'} useFlexGap={true} spacing={2}>
    <StyledTitle sx={{ fontSize: 'fontSize.l', color: 'color.secondary' }}>{content}</StyledTitle>

    <StyledModalButton
      onClick={() => {
        onConfirm();
        changeModalVisibility();
      }}>
      Tak, usuń
    </StyledModalButton>

    <StyledModalButton sx={{ backgroundColor: 'background.grey' }} onClick={changeModalVisibility}>
      Anuluj
    </StyledModalButton>
  </ModalContentStyles>
);
