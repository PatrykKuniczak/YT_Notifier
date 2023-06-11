import { useTernaryDarkMode } from 'usehooks-ts';
import GlobalStyles from './data/global-styles.ts';
import lightTheme from './data/themes/light-theme.ts';
import darkTheme from './data/themes/dark-theme.ts';
import { ThemeProvider } from '@mui/system';
import { StyledTitleHeader } from './components/ui/atomic/title-header.ts';
import { StyledMainContent } from './layouts/main-content.tsx';
import { StyledVideoArticle } from './components/ui/makro/video-article.tsx';
import { StyledVideosSection } from './layouts/videos-section.tsx';
import { StyledSearchBar } from './components/functional/makro/searchBar/search-bar.tsx';
import { StyledHeaderContainer } from './components/ui/micro/header-container.tsx';
import { StyledPageWrapper } from './components/ui/micro/page-wrapper.tsx';

function App() {
    const { isDarkMode } = useTernaryDarkMode();

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <GlobalStyles />

            <StyledPageWrapper>
                <StyledHeaderContainer />

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
            </StyledPageWrapper>
        </ThemeProvider>
    );
}

export default App;
