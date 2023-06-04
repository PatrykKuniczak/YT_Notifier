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

// FOR DEVELOPMENT TIME
// const Dev = styled('div')({
//     padding: 50
// });

function App() {
    const { isDarkMode, setTernaryDarkMode } = useTernaryDarkMode();

    useEffect(() => {
        setTernaryDarkMode('light');
    }, [setTernaryDarkMode]);

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <GlobalStyles />
            {/*<Dev>*/}
            <StyledMainContent>
                <StyledTitleHeader> Znalezione Wideo </StyledTitleHeader>

                <StyledVideosSection>
                    <StyledVideoArticle />
                    <StyledVideoArticle />
                    <StyledVideoArticle />
                    <StyledVideoArticle />
                    <StyledVideoArticle />
                    <StyledVideoArticle />
                </StyledVideosSection>
            </StyledMainContent>
            {/*</Dev>*/}
        </ThemeProvider>
    );
}

export default App;
