import { useTernaryDarkMode } from 'usehooks-ts';
import GlobalStyles from './data/global-styles.ts';
import lightTheme from './data/themes/light-theme.ts';
import darkTheme from './data/themes/dark-theme.ts';
import { ThemeProvider } from '@mui/system';
import { StyledHeaderContainer } from './layouts/header-container.tsx';
import { StyledPageWrapper } from './components/ui/atomic/page-wrapper.tsx';
import { Outlet } from 'react-router-dom';
import { StyledNavbar } from './layouts/navbar.tsx';

function App() {
    const { isDarkMode } = useTernaryDarkMode();

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <GlobalStyles />

            <StyledPageWrapper>
                <StyledHeaderContainer />

                <Outlet />

                <StyledNavbar />
            </StyledPageWrapper>
        </ThemeProvider>
    );
}

export default App;
