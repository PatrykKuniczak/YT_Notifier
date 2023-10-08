import { TChildren } from "@root/utils/types/types";
import { StyledItem } from "@pages/popup/components/shared/item";

export const StyledStoreList = ({ children }: TChildren) => (
    <StyledItem component={'ul'}>{children}</StyledItem>
);
