import { useTernaryDarkMode } from 'usehooks-ts';
import GlobalStyles from './data/global-styles.ts';
import lightTheme from './data/themes/light-theme.ts';
import darkTheme from './data/themes/dark-theme.ts';
import { useEffect } from 'react';
import { ThemeProvider } from '@mui/system';
import { StyledTitleHeader } from './components/ui/atomic/title-header.ts';
import { StyledMainContent } from './layouts/main-content.tsx';
import { StyledVideoArticle } from './components/ui/makro/video-article.tsx';
import { StyledVideosSection } from './layouts/videos-section.tsx';
import { StyledSearchBar } from './components/ui/atomic/search-bar.tsx';

function App() {
    const { isDarkMode, setTernaryDarkMode } = useTernaryDarkMode();

    useEffect(() => {
        setTernaryDarkMode('light');
    }, [setTernaryDarkMode]);

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <GlobalStyles />
            <StyledMainContent>
                <StyledTitleHeader> Znalezione Wideo </StyledTitleHeader>

                <StyledSearchBar />

                <StyledVideosSection>
                    <StyledVideoArticle />
                    <StyledVideoArticle />
                    <StyledVideoArticle />
                    <StyledVideoArticle />
                    <StyledVideoArticle />
                    <StyledVideoArticle />
                </StyledVideosSection>
            </StyledMainContent>
        </ThemeProvider>
    );
}

export default App;
