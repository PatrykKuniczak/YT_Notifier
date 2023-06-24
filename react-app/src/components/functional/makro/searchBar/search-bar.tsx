import { StyledIcon } from '../../../ui/atomic/shared/icon.ts';
import { StyledSearchBarWrapper } from '../../../ui/atomic/shared/search-bar-wrapper.ts';
import searchIcon from '../../../../assets/search-icon.svg';
import { StyledSearchBarInput } from '../../atomic/shared/search-bar-input.tsx';
import { Ref } from 'react';
import { useBasicLogic } from '../../../../hooks/use-basic-logic.ts';
import { useTheme } from '@mui/system';

export const StyledSearchBar = () => {
    const {
        ref,
        focus,
        handleKeyEvent,
        value: searchContent,
        handleStateChange
    } = useBasicLogic();

    const theme = useTheme();

    const clearContent = () => handleStateChange('');

    return (
        <StyledSearchBarWrapper onMouseOver={focus}>
            <StyledIcon
                src={searchIcon}
                alt={'Search magnifier'}
                width={20}
                height={20}
                sx={{ filter: `${theme.palette.background.searchIconFilter}` }}
            />

            <StyledSearchBarInput
                ref={ref as Ref<HTMLInputElement>}
                tabIndex={-1}
                autoFocus={true}
                aria-label="Search Bar"
                placeholder={'Wyszukaj'}
                value={searchContent}
                onChange={event => handleStateChange(event.target.value)}
                onKeyDown={event => handleKeyEvent(event, clearContent)}
            />
        </StyledSearchBarWrapper>
    );
};
