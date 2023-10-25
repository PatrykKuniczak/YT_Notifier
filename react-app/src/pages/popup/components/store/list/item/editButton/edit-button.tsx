import editIcon from '@assets/img/edit-icon.svg';
import { styled } from '@mui/system';
import { StyledButton } from '@pages/popup/components/shared/button';
import { StyledIcon } from '@pages/popup/components/shared/icon';
import { TVoid } from '@types';
import clsx from 'clsx';

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
      display: 'block',
      '&::before': {
        width: 14,
      },
    },
  }),
);

const EditStyledIcon = styled(StyledIcon)(({ theme }) =>
  theme.unstable_sx({
    display: 'inline',
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
    <EditStyledIcon src={editIcon} alt={'Edit Button'} />
  </EditButtonStyles>
);
