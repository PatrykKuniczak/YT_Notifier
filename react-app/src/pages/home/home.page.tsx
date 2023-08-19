import { Outlet } from 'react-router-dom';
import { StyledPageWrapper } from './home-wrapper.tsx';
import { StyledHeaderContainer } from '../../layouts/header-container.tsx';
import { StyledMainContent } from '../../layouts/main-content.tsx';
import { StyledTitle } from '../../components/shared/title-header.ts';
import { StyledSearchBar } from '../../components/shared/searchBar/search-bar.tsx';
import { StyledNavbar } from '../../layouts/navbar.tsx';
import { useHome } from './use-home.ts';
import { Ref } from 'react';

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
                    searchParamKey="keyword"
                />

                <Outlet />
            </StyledMainContent>

            <StyledNavbar focus={focus} />
        </StyledPageWrapper>
    );
};

export default HomePage;
