import { useDeferredValue, useMemo } from 'react';
import { useSearch } from '@root/utils/hooks/use-search';
import { useDeleteModal } from '@pages/popup/components/store/delete-modal/use-delete-modal';
import { StyledStoreItem } from '@pages/popup/components/store/list/item/store-value';
import { StyledDeleteModal } from '@pages/popup/components/store/delete-modal/delete-modal';
import StyledAddInput from '@pages/popup/components/store/list/item/addingKeyword/add-input';
import { StyledItemsContainer } from '@pages/popup/components/shared/items-container';

const dummyKeywords = ['test', 'adam', 'john', 'smith'] as const;

export const StoreRoute = () => {
	const { searchParamValue } = useSearch();

	const deferredSearchParam = useDeferredValue(searchParamValue);

	const filteredKeywords = useMemo(
		() => dummyKeywords.filter(keyword => keyword.includes(deferredSearchParam)),
		[deferredSearchParam],
	);

	const { open, changeModalVisibility } = useDeleteModal();

	return (
		<>
			<StyledAddInput />
			<StyledItemsContainer component={'ul'}>
				{filteredKeywords.map(filteredKeyword => (
					<StyledStoreItem
						key={filteredKeyword}
						changeModalVisibility={changeModalVisibility}
						keyword={filteredKeyword}
					/>
				))}
			</StyledItemsContainer>

			<StyledDeleteModal open={open} changeModalVisibility={changeModalVisibility} />
		</>
	);
};
