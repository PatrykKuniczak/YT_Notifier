import { Outlet } from 'react-router-dom';
import darkTheme from '../data/themes/dark-theme.ts';
import lightTheme from '../data/themes/light-theme.ts';
import GlobalStyles from '../data/global-styles.ts';
import { ThemeProvider } from '@mui/system';
import { useTernaryDarkMode } from '../hooks/use-ternary-darkmode';

const ProtectedPage = () => {
    const { isDarkMode } = useTernaryDarkMode();

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <GlobalStyles />

            <Outlet />
        </ThemeProvider>
    );
};

export default ProtectedPage;