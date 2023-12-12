import { StyledItemsContainer } from '@pages/popup/components/shared/items-container';
import { TChildren } from '@types';

export const StyledVideosSection = ({ children }: TChildren) => (
  <StyledItemsContainer component={'section'} alignItems={'center'}>
    {children}
  </StyledItemsContainer>
);
