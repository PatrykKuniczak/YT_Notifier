import { ThemeProvider } from 'styled-components';
import { useTernaryDarkMode } from 'usehooks-ts';
import GlobalStyles from './data/global-styles.ts';
import lightTheme from './data/themes/light-theme.ts';
import darkTheme from './data/themes/dark-theme.ts';

function App() {
    const { isDarkMode } = useTernaryDarkMode();

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <GlobalStyles />
        </ThemeProvider>
    );
}

export default App;
