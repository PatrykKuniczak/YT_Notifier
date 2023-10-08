import { TChildren } from "@root/utils/types/types";
import { StyledItem } from "@pages/popup/components/shared/item";

export const StyledVideosSection = ({ children }: TChildren) => (
    <StyledItem
        component={'section'}
        alignItems={'center'}>
        {children}
    </StyledItem>
);
