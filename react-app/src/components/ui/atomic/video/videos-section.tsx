import { TChildren } from '../../../../types/common.types.ts';
import { StyledItem } from '../shared/item.ts';

export const StyledVideosSection = ({ children }: TChildren) => (
    <StyledItem
        component={'section'}
        alignItems={'center'}>
        {children}
    </StyledItem>
);
