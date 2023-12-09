import searchIcon from '@assets/img/search-icon.svg';
import useHandleKeyEvents from '@hooks/use-handle-key-events';
import useSearch from '@hooks/use-search';
import { useTranslation } from '@internationalization';
import { useTheme } from '@mui/system';
import { StyledIcon } from '@pages/popup/components/shared/icon';
import { StyledSearchBarInput } from '@pages/popup/components/shared/searchBar/search-bar-input';
import { StyledSearchBarWrapper } from '@pages/popup/components/shared/searchBar/search-bar-wrapper';

export const StyledSearchBar = () => {
  const theme = useTheme();

  const { handleKeyEvent } = useHandleKeyEvents();
  const { clearSearchParamValue, searchParamValue, handleSearchParamsChange } = useSearch();

  const { t } = useTranslation();

  return (
    <StyledSearchBarWrapper onSubmit={event => event.preventDefault()}>
      <StyledIcon
        src={searchIcon}
        alt={''}
        width={20}
        height={20}
        sx={{
          filter: `${theme.palette.background.searchIconFilter}`,
        }}
      />

      <StyledSearchBarInput
        aria-label={t('search')}
        placeholder={t('search')}
        value={searchParamValue}
        name="q"
        onChange={event => handleSearchParamsChange(event.target.value)}
        onKeyDown={event => handleKeyEvent(event, clearSearchParamValue)}
      />
    </StyledSearchBarWrapper>
  );
};
