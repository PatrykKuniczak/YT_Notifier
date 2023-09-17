import { TVoid } from "@pages/popup/types/common.types";
import { StyledButton } from "@pages/popup/components/shared/button";
import { StyledIcon } from "@pages/popup/components/shared/icon";
import trashIcon from '@assets/img/trash-icon.svg';

export const StyledDeleteButton = ({
    changeModalVisibility
}: {
    changeModalVisibility: TVoid;
}) => {
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
