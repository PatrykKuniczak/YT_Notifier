import { useSearchParams } from 'react-router-dom';

const SEARCH_VALUE = 'searchValue';

const useSearch = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const searchParamValue = searchParams.get(SEARCH_VALUE) || '';

	const handleSearchParamsChange = (content: string) => {
		const allParams = Object.fromEntries(searchParams);
		setSearchParams({ ...allParams, [SEARCH_VALUE]: content });
	};

	const clearSearchParamValue = () => handleSearchParamsChange('');

	return {
		clearSearchParamValue,
		searchParamValue,
		handleSearchParamsChange,
	};
};

export default useSearch;
