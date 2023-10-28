import { Stack, styled } from '@mui/system';
import { StyledTitle } from '@pages/popup/components/shared/title-header';
import { StyledModalButton } from '@pages/popup/components/shared/delete-modal/delete-modal-button';
import { TVoid } from '@types';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

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
        {t('deleteModalConfirm')}
      </StyledModalButton>

      <StyledModalButton sx={{ backgroundColor: 'background.grey' }} onClick={changeModalVisibility}>
        {t('deleteModalCancel')}
      </StyledModalButton>
    </ModalContentStyles>
  );
};
