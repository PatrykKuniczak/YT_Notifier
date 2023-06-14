import { StyledSearchBar } from '../components/functional/makro/searchBar/search-bar.tsx';
import { StyledVideosSection } from '../components/ui/atomic/video/videos-section.tsx';
import { StyledVideoArticle } from '../components/ui/makro/video-article.tsx';

export const VideosRoute = () => {
    return (
        <>
            <StyledSearchBar />

            <StyledVideosSection>
                <StyledVideoArticle />
                <StyledVideoArticle />
                <StyledVideoArticle />
                <StyledVideoArticle />
                <StyledVideoArticle />
                <StyledVideoArticle />
            </StyledVideosSection>
        </>
    );
};
