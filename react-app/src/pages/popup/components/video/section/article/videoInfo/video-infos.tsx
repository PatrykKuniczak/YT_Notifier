import { IUserVideo } from '@interfaces';
import { useTranslation } from '@internationalization';
import { Stack } from '@mui/system';
import { StyledVideoInfo } from '@pages/popup/components/video/section/article/videoInfo/video-info';
import { StyledVideoTitle } from '@pages/popup/components/video/section/article/videoInfo/video-title';

export const StyledVideoInfos = ({
  publishedAt,
  views,
  title,
  videoUrl,
}: Pick<IUserVideo['video'], 'publishedAt' | 'title' | 'views'> & { videoUrl: string }) => {
  const { t } = useTranslation();

  return (
    <Stack useFlexGap={true} spacing={1} onClick={() => window.open(videoUrl)}>
      <Stack direction={'row'} alignItems={'center'} useFlexGap={true} spacing={2}>
        <StyledVideoInfo>{t('timeAgo', { date: new Date(publishedAt) })}</StyledVideoInfo>
        <StyledVideoInfo>
          {views} {t('views')}
        </StyledVideoInfo>
      </Stack>

      <StyledVideoTitle>{title}</StyledVideoTitle>
    </Stack>
  );
};
