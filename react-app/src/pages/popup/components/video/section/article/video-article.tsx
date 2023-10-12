import { Stack, styled } from '@mui/system';
import thumbnail from '@assets/img/thumbnail.png';
import { StyledAuthorInfo } from '@pages/popup/components/video/section/article/authorInfo/author-info';
import { StyledVideoInfos } from '@pages/popup/components/video/section/article/videoInfo/video-infos';
import { TComponentTag } from '@root/utils/types/types';
import { StyledThumbnail } from '@pages/popup/components/video/section/article/thumbnail/thumbnail';

const VideoArticleStyles = styled(Stack)<TComponentTag>(({ theme }) =>
	theme.unstable_sx({
		justifyContent: 'center',
		gap: 1,

		p: 1,

		borderRadius: 1,

		backgroundColor: 'background.secondary',

		cursor: 'pointer',
	}),
);

export const StyledVideoArticle = () => (
	<VideoArticleStyles component={'article'}>
		<StyledThumbnail src={thumbnail} alt={'YT Thumbnail'} />
		<StyledAuthorInfo />
		<StyledVideoInfos />
	</VideoArticleStyles>
);
