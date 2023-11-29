import { useTranslation } from '@internationalization';
import { Stack, styled } from '@mui/system';
import { StyledModalButton } from '@pages/popup/components/shared/delete-modal/delete-modal-button';
import { StyledTitle } from '@pages/popup/components/shared/title-header';
import { TVoid } from '@types';
import { ReactNode } from 'react';

const ModalContentStyles = styled(Stack)(({ theme }) =>
  theme.unstable_sx({
    width: 220,
    height: 'auto',

    paadingTop: 2,
    paddingBottom: 2,
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
}) => {
  const { t } = useTranslation();

  return (
    <ModalContentStyles justifyContent={'center'} alignItems={'center'} useFlexGap={true} spacing={2}>
      <StyledTitle sx={{ fontSize: 'fontSize.l', color: 'color.secondary' }}>{content}</StyledTitle>

      <StyledModalButton
        onClick={() => {
          onConfirm();
          changeModalVisibility();
        }}>
        {t('deleteModal.confirm')}
      </StyledModalButton>

      <StyledModalButton sx={{ backgroundColor: 'background.grey' }} onClick={changeModalVisibility}>
        {t('deleteModal.cancel')}
      </StyledModalButton>
    </ModalContentStyles>
  );
};
