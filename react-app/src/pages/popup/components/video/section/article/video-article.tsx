import thumbnail from '@assets/img/thumbnail.png';
import { Stack, styled } from '@mui/system';
import { StyledAuthorInfo } from '@pages/popup/components/video/section/article/authorInfo/author-info';
import { StyledThumbnail } from '@pages/popup/components/video/section/article/thumbnail/thumbnail';
import { StyledVideoInfos } from '@pages/popup/components/video/section/article/videoInfo/video-infos';
import { TComponentTag } from '@types';
import { CustomSkeleton } from '@pages/popup/components/shared/custom-skeleton';

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

export const StyledVideoArticle = ({ isLoading }: { isLoading: boolean }) => (
  <VideoArticleStyles component={'article'}>
    {isLoading ? <CustomSkeleton width={240} height={142} /> : <StyledThumbnail src={thumbnail} alt={'YT Thumbnail'} />}
    <StyledAuthorInfo isLoading={isLoading} />
    <StyledVideoInfos isLoading={isLoading} />
  </VideoArticleStyles>
);
