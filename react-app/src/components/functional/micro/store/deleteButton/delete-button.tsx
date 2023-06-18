import { StyledIcon } from '../../../../ui/atomic/shared/icon.ts';
import { StyledButton } from '../../../atomic/shared/button.ts';
// import { useDeleteButton } from './use-delete-button.ts';
import trashIcon from '../../../../../assets/trash-icon.svg';
import { TVoid } from '../../../../../types/common.types.ts';

export const StyledDeleteButton = ({
    changeModalVisibility
}: {
    changeModalVisibility: TVoid;
}) => {
    // const deleteX = useDeleteButton();

    return (
        <StyledButton
            sx={{ height: 16 }}
            onClick={changeModalVisibility}>
            <StyledIcon
                src={trashIcon}
                alt={'Delete Button'}
            />
        </StyledButton>
    );
};
