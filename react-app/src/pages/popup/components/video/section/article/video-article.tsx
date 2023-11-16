import { Stack, styled } from '@mui/system';
import { StyledAuthorInfo } from '@pages/popup/components/video/section/article/authorInfo/author-info';
import { StyledThumbnail } from '@pages/popup/components/video/section/article/thumbnail/thumbnail';
import { StyledVideoInfos } from '@pages/popup/components/video/section/article/videoInfo/video-infos';
import { TComponentTag } from '@types';
import { StyledSkeleton } from '@pages/popup/components/shared/styled-skeleton';

interface Video {
  thumbnail: string;
  authorName: string;
  avatar: string;
  publishedAt: string;
  views: string;
  title: string;
}

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

export const StyledVideoArticle = ({
  thumbnail,
  avatar,
  authorName,
  publishedAt,
  views,
  title,
  isLoading,
}: Video & { isLoading: boolean }) => (
  <VideoArticleStyles component={'article'}>
    {isLoading ? <StyledSkeleton width={240} height={142} /> : <StyledThumbnail src={thumbnail} aria-hidden={true} />}
    <StyledAuthorInfo avatar={avatar} authorName={authorName} isLoading={isLoading} />
    <StyledVideoInfos publishedAt={publishedAt} views={views} title={title} isLoading={isLoading} />
  </VideoArticleStyles>
);
