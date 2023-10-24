import useSearch from '@hooks/use-search';
import httpClient from '@http-client';
import { IKeyword } from '@interfaces';
import { StyledDeleteModal } from '@pages/popup/components/shared/delete-modal/delete-modal';
import { useDeleteModal } from '@pages/popup/components/shared/delete-modal/use-delete-modal';
import { StyledItemsContainer } from '@pages/popup/components/shared/items-container';
import StyledAddInput from '@pages/popup/components/store/list/item/addingKeyword/add-input';
import { StyledStoreItem } from '@pages/popup/components/store/list/item/store-value';
import urls from '@utils/endpoints/urls';
import { useDeferredValue, useMemo, useState } from 'react';
import queryClient, { useMutation, useQuery } from '@query-client';

export const StoreRoute = () => {
  const [keywordToRemove, setKeywordToRemove] = useState(0);

  const { searchParamValue } = useSearch();

  const { open, changeModalVisibility } = useDeleteModal();

  const { data: keywords } = useQuery<IKeyword[]>({
    queryKey: [urls.keyWords],
    queryFn: () => httpClient.get(urls.keyWords).then(({ data }) => data),
  });

  const { mutate: removeKeyword } = useMutation({
    mutationFn: ({ id }: { id: number }) => httpClient.delete(`${urls.keyWords}/${id}`),
    onSuccess: () => queryClient.invalidateQueries([urls.keyWords]),
  });

  const deferredSearchParam = useDeferredValue(searchParamValue);

  const filteredKeywords = useMemo(
    () => keywords?.filter(({ content }) => content.includes(deferredSearchParam)),
    [deferredSearchParam, keywords],
  );

  return (
    <>
      <StyledAddInput />
      <StyledItemsContainer component={'ul'}>
        {filteredKeywords?.map(({ id, content }) => (
          <StyledStoreItem
            key={id}
            id={id}
            content={content}
            setKeywordToRemove={setKeywordToRemove}
            changeModalVisibility={changeModalVisibility}
          />
        ))}
      </StyledItemsContainer>

      <StyledDeleteModal
        open={open}
        content={<>Czy jesteś pewien, że chcesz to usunąć?</>}
        onConfirm={() => removeKeyword({ id: keywordToRemove })}
        changeModalVisibility={changeModalVisibility}
      />
    </>
  );
};
