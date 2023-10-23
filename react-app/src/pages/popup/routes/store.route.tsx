import useSearch from '@hooks/use-search';
import httpClient from '@http-client';
import { IKeyword } from '@interfaces';
import { StyledItemsContainer } from '@pages/popup/components/shared/items-container';
import StyledAddInput from '@pages/popup/components/store/list/item/addingKeyword/add-input';
import { StyledStoreItem } from '@pages/popup/components/store/list/item/store-value';
import urls from '@utils/endpoints/urls';
import { useDeferredValue, useMemo } from 'react';
import { useQuery } from '@query-client';

export const StoreRoute = () => {
  const { searchParamValue } = useSearch();

  const { data: keywords } = useQuery<IKeyword[]>({
    queryKey: [urls.keywords],
    queryFn: () => httpClient.get(urls.keywords).then(({ data }) => data),
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
        {filteredKeywords?.map(({ id, content }) => <StyledStoreItem key={id} id={id} content={content} />)}
      </StyledItemsContainer>
    </>
  );
};
