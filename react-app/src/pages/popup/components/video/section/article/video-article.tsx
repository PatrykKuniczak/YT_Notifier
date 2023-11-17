import { Stack, styled } from '@mui/system';
import { StyledAuthorInfo } from '@pages/popup/components/video/section/article/authorInfo/author-info';
import { StyledThumbnail } from '@pages/popup/components/video/section/article/thumbnail/thumbnail';
import { StyledVideoInfos } from '@pages/popup/components/video/section/article/videoInfo/video-infos';
import { TComponentTag } from '@types';
import { IVideo } from '@interfaces';

export const VideoArticleStyles = styled(Stack)<TComponentTag>(({ theme }) =>
  theme.unstable_sx({
    justifyContent: 'center',
    gap: 1,

    p: 1,

    borderRadius: 1,

    backgroundColor: 'background.secondary',

    cursor: 'pointer',
  }),
);

export const StyledVideoArticle = ({ thumbnail, avatar, authorName, publishedAt, views, title }: IVideo) => (
  <VideoArticleStyles component={'article'}>
    <StyledThumbnail src={thumbnail} aria-hidden={true} />
    <StyledAuthorInfo avatar={avatar} authorName={authorName} />
    <StyledVideoInfos publishedAt={publishedAt} views={views} title={title} />
  </VideoArticleStyles>
);
