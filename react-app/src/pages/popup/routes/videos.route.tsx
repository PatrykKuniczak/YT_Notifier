import useSearch from '@hooks/use-search';
import httpClient from '@http-client';
import { IErrorWithCause, IUserVideo } from '@interfaces';
import { useTranslation } from '@internationalization';
import { StyledVideoArticle } from '@pages/popup/components/video/section/article/video-article';
import { StyledVideoArticleSkeleton } from '@pages/popup/components/video/section/skeleton/video-article-skeleton';
import { StyledVideosSection } from '@pages/popup/components/video/section/videos-section';
import { useQuery } from '@query-client';
import urls from '@utils/endpoints/urls';
import { useDeferredValue, useMemo } from 'react';
import { toast } from 'react-toastify';

export const VideosRoute = () => {
  const {
    data: videos,
    isLoading: videosIsLoading,
    error: videosError,
  } = useQuery<IUserVideo[], IErrorWithCause>({
    queryKey: [urls.ytVideos.getVideos],
    queryFn: () => httpClient.get(urls.ytVideos.getVideos).then(({ data }) => data),
  });

  const { t } = useTranslation();
  const { searchParamValue } = useSearch();

  const deferredSearchParam = useDeferredValue(searchParamValue);

  const filteredVideos = useMemo(
    () => videos?.filter(({ video: { title } }) => title.includes(deferredSearchParam)),
    [deferredSearchParam, videos],
  );

  if (videosError) {
    toast.error(t([`playlistErrors.${videosError.response.data.cause}`, 'fallbackError']), {
      toastId: 'playlist_updating_error',
    });
  } else if (videosIsLoading) {
    return (
      <StyledVideosSection>
        <StyledVideoArticleSkeleton />
        <StyledVideoArticleSkeleton />
      </StyledVideosSection>
    );
  } else {
    return (
      <StyledVideosSection>
        {filteredVideos?.map(userVideo => <StyledVideoArticle key={userVideo.video.id} {...userVideo} />)}
      </StyledVideosSection>
    );
  }
};
