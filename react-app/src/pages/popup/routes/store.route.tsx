import useSearch from '@hooks/use-search';
import httpClient from '@http-client';
import { IErrorWithCause, IKeyword } from '@interfaces';
import { StyledDeleteModal } from '@pages/popup/components/shared/delete-modal/delete-modal';
import { useDeleteModal } from '@pages/popup/components/shared/delete-modal/use-delete-modal';
import { StyledItemsContainer } from '@pages/popup/components/shared/items-container';
import StyledAddInput from '@pages/popup/components/store/list/item/addingKeyword/add-input';
import { StyledStoreItem } from '@pages/popup/components/store/list/item/store-value';
import queryClient, { useMutation, useQuery } from '@query-client';
import urls from '@utils/endpoints/urls';
import { useDeferredValue, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { StyledSkeleton } from '@pages/popup/components/shared/styled-skeleton';

export const StoreRoute = () => {
  const [keywordToRemove, setKeywordToRemove] = useState(0);

  const [openedInputId, setOpenedInputId] = useState(0);

  const { searchParamValue } = useSearch();

  const { open, changeModalVisibility } = useDeleteModal();

  const { t } = useTranslation();

  const { data: keywords, isLoading: keywordsIsLoading } = useQuery<IKeyword[]>({
    queryKey: [urls.keyWords],
    queryFn: () => httpClient.get(urls.keyWords).then(({ data }) => data),
  });

  const { mutate: removeKeyword } = useMutation({
    mutationFn: ({ id }: { id: number }) => httpClient.delete(`${urls.keyWords}/${id}`),
    onSuccess: async () => queryClient.invalidateQueries([urls.keyWords]),
    onError: (error: IErrorWithCause) =>
      toast.error(t([`keywordErrors.${error.response.data.cause}`, 'fallbackError'])),
  });

  const deferredSearchParam = useDeferredValue(searchParamValue);

  const filteredKeywords = useMemo(
    () => keywords?.filter(({ content }) => content.includes(deferredSearchParam)),
    [deferredSearchParam, keywords],
  );

  const handleOpenedInputIdChange = (id: number) => {
    setOpenedInputId(id);
  };

  return (
    <>
      <StyledAddInput />
      <StyledItemsContainer component={'ul'}>
        {keywordsIsLoading ? (
          <StyledSkeleton height={33} count={4} style={{ marginBottom: 8 }} />
        ) : (
          filteredKeywords?.map(({ id, content }) => (
            <StyledStoreItem
              key={id}
              id={id}
              openedInputId={openedInputId}
              content={content}
              setKeywordToRemove={setKeywordToRemove}
              changeModalVisibility={changeModalVisibility}
              changeOpenedInputId={handleOpenedInputIdChange}
            />
          ))
        )}
      </StyledItemsContainer>

      <StyledDeleteModal
        open={open}
        content={<>{t('deleteModalContent')}</>}
        onConfirm={() => removeKeyword({ id: keywordToRemove })}
        changeModalVisibility={changeModalVisibility}
      />
    </>
  );
};
