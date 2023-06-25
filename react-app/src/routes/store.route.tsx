import { StyledStoreList } from '../components/ui/atomic/store/store-section.tsx';
import { StyledStoreItem } from '../components/ui/makro/store/store-value.tsx';
import { StyledDeleteModal } from '../components/functional/atomic/store/delete-modal/delete-modal.tsx';
import { useDeleteModal } from '../components/functional/atomic/store/delete-modal/use-delete-modal.ts';

export const StoreRoute = () => {
    const { open, changeModalVisibility } = useDeleteModal();

    const dummyKeyword = 'Example';

    return (
        <>
            <StyledStoreList>
                <StyledStoreItem
                    changeModalVisibility={changeModalVisibility}
                    keyword={dummyKeyword}
                />
                <StyledStoreItem
                    changeModalVisibility={changeModalVisibility}
                    keyword={dummyKeyword}
                />
                <StyledStoreItem
                    changeModalVisibility={changeModalVisibility}
                    keyword={dummyKeyword}
                />
                <StyledStoreItem
                    changeModalVisibility={changeModalVisibility}
                    keyword={dummyKeyword}
                />
                <StyledStoreItem
                    changeModalVisibility={changeModalVisibility}
                    keyword={dummyKeyword}
                />
                <StyledStoreItem
                    changeModalVisibility={changeModalVisibility}
                    keyword={dummyKeyword}
                />
                <StyledStoreItem
                    changeModalVisibility={changeModalVisibility}
                    keyword={dummyKeyword}
                />
                <StyledStoreItem
                    changeModalVisibility={changeModalVisibility}
                    keyword={dummyKeyword}
                />
                <StyledStoreItem
                    changeModalVisibility={changeModalVisibility}
                    keyword={dummyKeyword}
                />
                <StyledStoreItem
                    changeModalVisibility={changeModalVisibility}
                    keyword={dummyKeyword}
                />
                <StyledStoreItem
                    changeModalVisibility={changeModalVisibility}
                    keyword={dummyKeyword}
                />
                <StyledStoreItem
                    changeModalVisibility={changeModalVisibility}
                    keyword={dummyKeyword}
                />
                <StyledStoreItem
                    changeModalVisibility={changeModalVisibility}
                    keyword={dummyKeyword}
                />
                <StyledStoreItem
                    changeModalVisibility={changeModalVisibility}
                    keyword={dummyKeyword}
                />
                <StyledStoreItem
                    changeModalVisibility={changeModalVisibility}
                    keyword={dummyKeyword}
                />
            </StyledStoreList>

            <StyledDeleteModal
                open={open}
                changeModalVisibility={changeModalVisibility}
            />
        </>
    );
};
