import { useTernaryDarkMode } from 'usehooks-ts';
import GlobalStyles from './data/global-styles.ts';
import lightTheme from './data/themes/light-theme.ts';
import darkTheme from './data/themes/dark-theme.ts';
import { ThemeProvider } from '@mui/system';
import { StyledHeaderContainer } from './layouts/header-container.tsx';
import { StyledPageWrapper } from './components/ui/atomic/shared/page-wrapper.tsx';
import { Outlet, useLocation } from 'react-router-dom';
import { StyledNavbar } from './layouts/navbar.tsx';
import { StyledMainContent } from './layouts/main-content.tsx';
import { StyledTitle } from './components/ui/atomic/shared/title-header.ts';
import { useEffect, useState } from 'react';
import { StyledSearchBar } from './components/functional/makro/searchBar/search-bar.tsx';

function App() {
    const [title, setTitle] = useState('');
    const { isDarkMode } = useTernaryDarkMode();
    const location = useLocation();

    useEffect(() => {
        setTitle(
            location.pathname === '/' ? 'Zapisane Wideo' : 'Zapisane Frazy'
        );
    }, [location.pathname]);

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <GlobalStyles />

            <StyledPageWrapper>
                <StyledHeaderContainer />

                <StyledMainContent>
                    <StyledTitle>{title}</StyledTitle>

                    <StyledSearchBar />

                    <Outlet />
                </StyledMainContent>

                <StyledNavbar />
            </StyledPageWrapper>
        </ThemeProvider>
    );
}

export default App;
