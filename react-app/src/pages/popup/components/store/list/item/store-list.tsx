import { TChildren } from "@pages/popup/types/common.types";
import { StyledItem } from "@pages/popup/components/shared/item";

export const StyledStoreList = ({ children }: TChildren) => (
    <StyledItem component={'ul'}>{children}</StyledItem>
);
