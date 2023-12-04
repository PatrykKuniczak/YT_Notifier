import watchLaterIcon from '@assets/img/watch-later-icon.svg';
import httpClient from '@http-client';
import { IErrorWithCause, IVideo } from '@interfaces';
import { useTranslation } from '@internationalization';
import { Stack } from '@mui/system';
import { StyledButton } from '@pages/popup/components/shared/button';
import { StyledIcon } from '@pages/popup/components/shared/icon';
import { StyledVideoInfo } from '@pages/popup/components/video/section/article/videoInfo/video-info';
import { StyledVideoTitle } from '@pages/popup/components/video/section/article/videoInfo/video-title';
import queryClient, { useMutation } from '@query-client';
import urls from '@utils/endpoints/urls';
import { toast } from 'react-toastify';

export const StyledVideoInfos = ({
  publishedAt,
  views,
  title,
  id: videoId,
  videoUrl,
}: Pick<IVideo, 'publishedAt' | 'title' | 'views' | 'id'> & { videoUrl: string }) => {
  const { t } = useTranslation();

  const { mutate: updatePlaylist } = useMutation({
    mutationFn: () =>
      httpClient.patch(urls.ytVideos.updatePlaylist, {
        videoId,
        title: t('playlist.title'),
        description: t('playlist.description'),
      }),
    onSuccess: () => {
      toast.success(t('playlist.updated'));
      queryClient.invalidateQueries([urls.auth.me]);
    },
    onError: (error: IErrorWithCause) =>
      toast.error(t([`playlistErrors.${error.response.data.cause}`, 'fallbackError']), {
        toastId: 'playlist_updating_error',
      }),
  });

  return (
    <Stack useFlexGap={true} spacing={1}>
      <Stack direction={'row'} alignItems={'center'} useFlexGap={true} spacing={2}>
        <StyledVideoInfo onClick={() => window.open(videoUrl)}>
          {t('timeAgo', { date: new Date(publishedAt) })}
        </StyledVideoInfo>
        <StyledVideoInfo onClick={() => window.open(videoUrl)}>{t('views', { amount: views })}</StyledVideoInfo>
        <StyledButton title={t('nav.watchLater')} aria-label={t('nav.watchLater')} onClick={() => updatePlaylist()}>
          <StyledIcon src={watchLaterIcon} alt={''} width={14} height={14} />
        </StyledButton>
      </Stack>

      <StyledVideoTitle>{title}</StyledVideoTitle>
    </Stack>
  );
};
