import { StyledSkeleton } from '@pages/popup/components/shared/styled-skeleton';
import { VideoArticleStyles } from '@pages/popup/components/video/section/article/video-article';
import { StyledAuthorInfoSkeleton } from '@pages/popup/components/video/section/skeleton/authorInfoSkeleton/author-info-skeleton';
import { StyledVideoInfosSkeleton } from '@pages/popup/components/video/section/skeleton/videoInfoSkeleton/video-infos-skeleton';

export const StyledVideoArticleSkeleton = () => (
  <VideoArticleStyles component={'article'}>
    <StyledSkeleton width={240} height={142} />
    <StyledAuthorInfoSkeleton />
    <StyledVideoInfosSkeleton />
  </VideoArticleStyles>
);
