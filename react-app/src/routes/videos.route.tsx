import { StyledVideosSection } from '../components/ui/atomic/video/videos-section.tsx';
import { StyledVideoArticle } from '../components/ui/makro/video/video-article.tsx';

export const VideosRoute = () => {
    return (
        <StyledVideosSection>
            <StyledVideoArticle />
            <StyledVideoArticle />
            <StyledVideoArticle />
            <StyledVideoArticle />
            <StyledVideoArticle />
            <StyledVideoArticle />
        </StyledVideosSection>
    );
};
