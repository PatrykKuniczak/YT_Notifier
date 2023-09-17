import { Outlet } from 'react-router-dom';
import { Ref } from 'react';
import { useHome } from "@pages/popup/pages/home/use-home";
import { StyledPageWrapper } from "@pages/popup/pages/home/home-wrapper";
import { StyledHeaderContainer } from "@pages/popup/layouts/header-container";
import { StyledMainContent } from "@pages/popup/layouts/main-content";
import { StyledTitle } from "@pages/popup/components/shared/title-header";
import { StyledSearchBar } from "@pages/popup/components/shared/searchBar/search-bar";
import { StyledNavbar } from "@pages/popup/layouts/navbar";

const HomePage = () => {
    const { title, ref, focus } = useHome();

    return (
        <StyledPageWrapper>
            <StyledHeaderContainer />

            <StyledMainContent>
                <StyledTitle>{title}</StyledTitle>

                <StyledSearchBar
                    ref={ref as Ref<HTMLInputElement>}
                    focus={focus}
                />

                <Outlet />
            </StyledMainContent>

            <StyledNavbar focus={focus} />
        </StyledPageWrapper>
    );
};

export default HomePage;
