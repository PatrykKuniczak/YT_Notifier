import trashIcon from '@assets/img/trash-icon.svg';
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
    changeModalVisibility();
    setKeywordToRemove();
  };

  return (
    <StyledButton sx={{ height: 16 }} onClick={handleClick}>
      <StyledIcon src={trashIcon} alt={'Delete Button'} />
    </StyledButton>
  );
};
