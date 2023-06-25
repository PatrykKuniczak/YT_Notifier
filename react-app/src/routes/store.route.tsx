import { StyledDeleteModal } from '../components/store/delete-modal/delete-modal.tsx';
import { useDeleteModal } from '../components/store/delete-modal/use-delete-modal.ts';
import { StyledStoreList } from '../components/store/list/store-list.tsx';
import { StyledStoreItem } from '../components/store/list/item/store-value.tsx';

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
