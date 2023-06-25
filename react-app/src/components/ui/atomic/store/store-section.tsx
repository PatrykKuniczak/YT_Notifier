import { TChildren } from '../../../../types/common.types.ts';
import { StyledItem } from '../shared/item.ts';

export const StyledStoreList = ({ children }: TChildren) => (
    <StyledItem component={'ul'}>{children}</StyledItem>
);
