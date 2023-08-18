import { useSearchParams } from 'react-router-dom';

export const useSearch = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const keywordSearchParam = searchParams.get('keyword') || '';

    const handleSearchParamsChange = (content: string) => {
        setSearchParams({ keyword: content });
    };

    return { keywordSearchParam, handleSearchParamsChange };
};
