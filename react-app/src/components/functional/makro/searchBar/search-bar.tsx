import { StyledIcon } from '../../../ui/atomic/icon.ts';
import { StyledSearchBarWrapper } from '../../atomic/search-bar-wrapper.ts';
import searchIcon from '../../../../assets/search-icon.svg';
import { StyledSearchBarInput } from '../../atomic/search-bar-input.tsx';
import { Ref } from 'react';
import { useSearchBar } from './useSearchBar.ts';

export const StyledSearchBar = () => {
    const { ref, focus, clearContent, searchContent, handleContentChange } =
        useSearchBar();

    return (
        <StyledSearchBarWrapper onMouseOver={focus}>
            <StyledIcon
                src={searchIcon}
                width={20}
                height={20}
            />

            <StyledSearchBarInput
                ref={ref as Ref<HTMLInputElement>}
                tabIndex={-1}
                autoFocus={true}
                aria-label="Search Bar"
                placeholder={'Wyszukaj'}
                value={searchContent}
                onChange={event => handleContentChange(event.target.value)}
                onKeyDown={event => event.key === 'Escape' && clearContent()}
            />
        </StyledSearchBarWrapper>
    );
};
