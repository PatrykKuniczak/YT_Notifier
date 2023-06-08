import useFocus from '../../../hooks/use-focus.ts';
import { StyledSearchIcon } from '../../ui/atomic/search-icon.ts';
import { StyledSearchBarWrapper } from '../atomic/search-bar-wrapper.ts';
import searchIcon from '../../../assets/search-icon.svg';
import { StyledSearchBarInput } from '../atomic/search-bar-input.tsx';
import { Ref } from 'react';

export const StyledSearchBar = () => {
    const { ref, focus } = useFocus();

    return (
        <StyledSearchBarWrapper onMouseOver={focus}>
            <StyledSearchIcon
                src={searchIcon}
                width={20}
                height={20}
            />

            <StyledSearchBarInput
                ref={ref as Ref<HTMLInputElement>}
                aria-label="Search Bar"
                placeholder={'Wyszukaj'}
                tabIndex={-1}
                autoFocus={true}
            />
        </StyledSearchBarWrapper>
    );
};
