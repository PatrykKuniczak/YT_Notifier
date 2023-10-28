import searchIcon from '@assets/img/search-icon.svg';
import useHandleKeyEvents from '@hooks/use-handle-key-events';
import useSearch from '@hooks/use-search';
import { useTheme } from '@mui/system';
import { StyledIcon } from '@pages/popup/components/shared/icon';
import { StyledSearchBarInput } from '@pages/popup/components/shared/searchBar/search-bar-input';
import { StyledSearchBarWrapper } from '@pages/popup/components/shared/searchBar/search-bar-wrapper';
import { TVoid } from '@types';
import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

export const StyledSearchBar = forwardRef<HTMLInputElement, { focus: TVoid }>((_, ref) => {
  const theme = useTheme();

  const { handleKeyEvent } = useHandleKeyEvents();
  const { clearSearchParamValue, searchParamValue, handleSearchParamsChange } = useSearch();

  const { t } = useTranslation();

  return (
    <StyledSearchBarWrapper>
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
        ref={ref}
        autoFocus={true}
        aria-label={t('search')}
        placeholder={t('search')}
        value={searchParamValue}
        onChange={event => handleSearchParamsChange(event.target.value)}
        onKeyDown={event => handleKeyEvent(event, clearSearchParamValue)}
      />
    </StyledSearchBarWrapper>
  );
});
