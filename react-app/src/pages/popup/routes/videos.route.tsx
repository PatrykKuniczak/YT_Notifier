import { StyledVideoArticle } from '@pages/popup/components/video/section/article/video-article';
import { StyledVideosSection } from '@pages/popup/components/video/section/videos-section';

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
