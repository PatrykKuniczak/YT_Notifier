import { TChildren } from "@root/utils/types/types";
import { StyledItemsContainer } from "@pages/popup/components/shared/items-container";

export const StyledVideosSection = ({ children }: TChildren) => (
    <StyledItemsContainer
        component={'section'}
        alignItems={'center'}>
        {children}
    </StyledItemsContainer>
);
