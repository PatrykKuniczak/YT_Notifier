import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@mui/system';
import darkTheme from '../../data/themes/dark-theme.ts';
import lightTheme from '../../data/themes/light-theme.ts';
import GlobalStyles from '../../data/global-styles.ts';
import { StyledPageWrapper } from './home-wrapper.tsx';
import { StyledHeaderContainer } from '../../layouts/header-container.tsx';
import { StyledMainContent } from '../../layouts/main-content.tsx';
import { StyledTitle } from '../../components/shared/title-header.ts';
import { StyledSearchBar } from '../../components/shared/searchBar/search-bar.tsx';
import { StyledNavbar } from '../../layouts/navbar.tsx';
import { useHome } from './use-home.ts';
import { Ref } from 'react';

const HomePage = () => {
    const { isDarkMode, title, ref, focus } = useHome();

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <GlobalStyles />

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
        </ThemeProvider>
    );
};

export default HomePage;
