import { StyledMainContent } from '../layouts/main-content.tsx';
import { StyledTitleHeader } from '../components/ui/atomic/title-header.ts';
import { StyledSearchBar } from '../components/functional/makro/searchBar/search-bar.tsx';
import { StyledVideosSection } from '../components/ui/atomic/videos-section.tsx';
import { StyledVideoArticle } from '../components/ui/makro/video-article.tsx';

export const VideosRoute = () => {
    return (
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
    );
};
