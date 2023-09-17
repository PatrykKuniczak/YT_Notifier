import { TChildren } from "@pages/popup/types/common.types";
import { StyledItem } from "@pages/popup/components/shared/item";

export const StyledVideosSection = ({ children }: TChildren) => (
    <StyledItem
        component={'section'}
        alignItems={'center'}>
        {children}
    </StyledItem>
);
