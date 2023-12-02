import { IUserVideo } from '@interfaces';
import { Stack, styled } from '@mui/system';
import { StyledAuthorInfo } from '@pages/popup/components/video/section/article/authorInfo/author-info';
import { StyledThumbnail } from '@pages/popup/components/video/section/article/thumbnail/thumbnail';
import { StyledVideoInfos } from '@pages/popup/components/video/section/article/videoInfo/video-infos';
import { TComponentTag } from '@types';

export const VideoArticleStyles = styled(Stack)<TComponentTag>(({ theme }) =>
  theme.unstable_sx({
    justifyContent: 'center',
    gap: 1,

    p: 1,

    borderRadius: 1,

    backgroundColor: 'background.secondary',

    cursor: 'pointer',

    ':hover': {
      opacity: 0.8,
    },
  }),
);

export const StyledVideoArticle = ({ video, channel }: IUserVideo) => {
  const { thumbnail, publishedAt, title, views, id: videoId } = video;
  const { thumbnail: avatar, title: authorName, id: channelId } = channel;

  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const channelUrl = `https://www.youtube.com/channel/${channelId}`;

  return (
    <VideoArticleStyles component={'article'}>
      <StyledThumbnail src={thumbnail} aria-hidden={true} onClick={() => window.open(videoUrl)} />
      <StyledAuthorInfo thumbnail={avatar} title={authorName} channelUrl={channelUrl} />
      <StyledVideoInfos publishedAt={publishedAt} views={views} title={title} id={videoId} videoUrl={videoUrl} />
    </VideoArticleStyles>
  );
};
