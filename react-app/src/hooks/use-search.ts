import { useSearchParams } from 'react-router-dom';

export const useSearch = (key: string) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchParamValue = searchParams.get(key) || '';

    const handleSearchParamsChange = (content: string) => {
        const allParams = Object.fromEntries(searchParams);
        setSearchParams({ ...allParams, [key]: content });
    };

    const clearSearchParamValue = () => handleSearchParamsChange('');

    return {
        clearSearchParamValue,
        searchParamValue,
        handleSearchParamsChange
    };
};
