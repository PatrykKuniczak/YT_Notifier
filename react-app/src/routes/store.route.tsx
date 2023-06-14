import { StyledStoreList } from '../components/ui/atomic/store/store-section.tsx';
import { StyledStoreItem } from '../components/ui/makro/store/store-value.tsx';

export const StoreRoute = () => {
    const dummyKeyword = 'Example';

    return (
        <StyledStoreList>
            <StyledStoreItem keyword={dummyKeyword} />
            <StyledStoreItem keyword={dummyKeyword} />
            <StyledStoreItem keyword={dummyKeyword} />
            <StyledStoreItem keyword={dummyKeyword} />
            <StyledStoreItem keyword={dummyKeyword} />
            <StyledStoreItem keyword={dummyKeyword} />
            <StyledStoreItem keyword={dummyKeyword} />
            <StyledStoreItem keyword={dummyKeyword} />
            <StyledStoreItem keyword={dummyKeyword} />
            <StyledStoreItem keyword={dummyKeyword} />
            <StyledStoreItem keyword={dummyKeyword} />
            <StyledStoreItem keyword={dummyKeyword} />
            <StyledStoreItem keyword={dummyKeyword} />
            <StyledStoreItem keyword={dummyKeyword} />
            <StyledStoreItem keyword={dummyKeyword} />
            <StyledStoreItem keyword={dummyKeyword} />
        </StyledStoreList>
    );
};
