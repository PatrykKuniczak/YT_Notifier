import { StyledIcon } from "../icon.ts";
import { StyledSearchBarWrapper } from "./search-bar-wrapper.ts";
import searchIcon from "../../../assets/search-icon.svg";
import { StyledSearchBarInput } from "./search-bar-input.tsx";
import { forwardRef, Ref } from "react";
import { useHandleKeyEvents } from "../../../hooks/use-handle-key-events.ts";
import { useTheme } from "@mui/system";
import { TVoid } from "../../../types/common.types.ts";
import { useSearch } from "../../../hooks/use-search.ts";

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
