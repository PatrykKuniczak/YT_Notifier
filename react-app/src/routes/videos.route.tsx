import { StyledVideosSection } from '../components/video/section/videos-section.tsx';
import { StyledVideoArticle } from '../components/video/section/article/video-article.tsx';

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
