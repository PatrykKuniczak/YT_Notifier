import { StyledVideosSection } from '@pages/popup/components/video/section/videos-section';
import { StyledVideoArticle } from '@pages/popup/components/video/section/article/video-article';

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
