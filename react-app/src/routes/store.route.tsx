import { StyledDeleteModal } from '../components/store/delete-modal/delete-modal.tsx';
import { useDeleteModal } from '../components/store/delete-modal/use-delete-modal.ts';
import { StyledStoreList } from '../components/store/list/store-list.tsx';
import { StyledStoreItem } from '../components/store/list/item/store-value.tsx';
import { useDeferredValue, useMemo } from 'react';
import { useSearch } from '../hooks/use-search.ts';

const dummyKeywords = ['test', 'adam', 'john', 'smith'] as const;

export const StoreRoute = () => {
    const { searchParamValue } = useSearch();

    const deferredSearchParam = useDeferredValue(searchParamValue);

    const filteredKeywords = useMemo(
        () =>
            dummyKeywords.filter(keyword =>
                keyword.includes(deferredSearchParam)
            ),
        [deferredSearchParam]
    );

    const { open, changeModalVisibility } = useDeleteModal();

    return (
        <>
            <StyledStoreList>
                {filteredKeywords.map(filteredKeyword => (
                    <StyledStoreItem
                        key={filteredKeyword}
                        changeModalVisibility={changeModalVisibility}
                        keyword={filteredKeyword}
                    />
                ))}
            </StyledStoreList>

            <StyledDeleteModal
                open={open}
                changeModalVisibility={changeModalVisibility}
            />
        </>
    );
};
