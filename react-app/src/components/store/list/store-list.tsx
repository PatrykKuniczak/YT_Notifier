import { TChildren } from '../../../types/common.types.ts';
import { StyledItem } from '../../shared/item.ts';
import AddInput from './item/addingKeyword/add-input.tsx';

export const StyledStoreList = ({ children }: TChildren) => (
    <>
        <AddInput />
        <StyledItem component={'ul'}>{children}</StyledItem>
    </>
);
