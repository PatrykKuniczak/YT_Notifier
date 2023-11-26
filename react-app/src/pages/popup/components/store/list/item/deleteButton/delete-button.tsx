import trashIcon from '@assets/img/trash-icon.svg';
import { useTranslation } from '@internationalization';
import { StyledButton } from '@pages/popup/components/shared/button';
import { StyledIcon } from '@pages/popup/components/shared/icon';
import { TVoid } from '@types';

export const StyledDeleteButton = ({
  setKeywordToRemove,
  changeModalVisibility,
}: {
  setKeywordToRemove: TVoid;
  changeModalVisibility: TVoid;
}) => {
  const handleClick = () => {
    setKeywordToRemove();
    changeModalVisibility();
  };

  const { t } = useTranslation();

  return (
    <StyledButton sx={{ height: 16 }} onClick={handleClick} aria-label={t('aria-labels.deleteButton')}>
      <StyledIcon src={trashIcon} alt={''} />
    </StyledButton>
  );
};
