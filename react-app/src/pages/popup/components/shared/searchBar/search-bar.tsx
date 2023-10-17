import searchIcon from '@assets/img/search-icon.svg';
import useHandleKeyEvents from '@hooks/use-handle-key-events';
import useSearch from '@hooks/use-search';
import { useTheme } from '@mui/system';
import { StyledIcon } from '@pages/popup/components/shared/icon';
import { StyledSearchBarInput } from '@pages/popup/components/shared/searchBar/search-bar-input';
import { StyledSearchBarWrapper } from '@pages/popup/components/shared/searchBar/search-bar-wrapper';
import { forwardRef, Ref } from 'react';

// eslint-disable-next-line react/display-name
export const StyledSearchBar = forwardRef(ref => {
  const theme = useTheme();

  const { handleKeyEvent } = useHandleKeyEvents();
  const { clearSearchParamValue, searchParamValue, handleSearchParamsChange } = useSearch();

  return (
    <StyledSearchBarWrapper>
      <StyledIcon
        src={searchIcon}
        alt={'Search magnifier'}
        width={20}
        height={20}
        sx={{
          filter: `${theme.palette.background.searchIconFilter}`,
        }}
      />

      <StyledSearchBarInput
        ref={ref as Ref<HTMLInputElement>}
        autoFocus={true}
        aria-label="Search Bar"
        placeholder={'Wyszukaj'}
        value={searchParamValue}
        onChange={event => handleSearchParamsChange(event.target.value)}
        onKeyDown={event => handleKeyEvent(event, clearSearchParamValue)}
      />
    </StyledSearchBarWrapper>
  );
});
