import searchIcon from "@assets/img/search-icon.svg";
import { forwardRef, Ref } from "react";
import { TVoid } from "@root/utils/types/types";
import { useTheme } from "@mui/system";
import { useHandleKeyEvents } from "@root/utils/hooks/use-handle-key-events";
import { useSearch } from "@root/utils/hooks/use-search";
import { StyledSearchBarWrapper } from "@pages/popup/components/shared/searchBar/search-bar-wrapper";
import { StyledIcon } from "@pages/popup/components/shared/icon";
import { StyledSearchBarInput } from "@pages/popup/components/shared/searchBar/search-bar-input";

// eslint-disable-next-line react/display-name
export const StyledSearchBar = forwardRef(
    ({ focus }: { focus: TVoid }, ref) => {
        const theme = useTheme();

        const { handleKeyEvent } = useHandleKeyEvents();
        const {
            clearSearchParamValue,
            searchParamValue,
            handleSearchParamsChange
        } = useSearch();

        return (
            <StyledSearchBarWrapper onMouseOver={focus}>
                <StyledIcon
                    src={searchIcon}
                    alt={'Search magnifier'}
                    width={20}
                    height={20}
                    sx={{
                        filter: `${theme.palette.background.searchIconFilter}`
                    }}
                />

                <StyledSearchBarInput
                    ref={ref as Ref<HTMLInputElement>}
                    autoFocus={true}
                    aria-label="Search Bar"
                    placeholder={'Wyszukaj'}
                    value={searchParamValue}
                    onChange={event =>
                        handleSearchParamsChange(event.target.value)
                    }
                    onKeyDown={event =>
                        handleKeyEvent(event, clearSearchParamValue)
                    }
                />
            </StyledSearchBarWrapper>
        );
    }
);
