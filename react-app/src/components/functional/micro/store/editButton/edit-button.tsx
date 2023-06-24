import editIcon from '../../../../../assets/edit-icon.svg';
import { StyledButton } from '../../../atomic/shared/button.ts';
import { TVoid } from '../../../../../types/common.types.ts';
import { StyledIcon } from '../../../../ui/atomic/shared/icon.ts';
import { styled } from '@mui/system';
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

            bgcolor: '#7846F0',

            transition: 'width 0.3s ease-in-out'
        },

        '&.openedInput': {
            '&::before': {
                width: 14
            }
        }
    })
);
export const StyledEditButton = ({
    changeInputVisibility,
    openedInput
}: {
    changeInputVisibility: TVoid;
    openedInput: boolean;
}) => (
    <EditButtonStyles
        className={clsx({ openedInput })}
        onClick={changeInputVisibility}>
        <StyledIcon
            src={editIcon}
            alt={'Edit Button'}
        />
    </EditButtonStyles>
);
