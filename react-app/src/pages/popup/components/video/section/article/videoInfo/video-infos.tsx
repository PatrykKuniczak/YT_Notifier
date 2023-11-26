import { IVideo } from '@interfaces';
import { useTranslation } from '@internationalization';
import { Stack } from '@mui/system';
import { StyledVideoInfo } from '@pages/popup/components/video/section/article/videoInfo/video-info';
import { StyledVideoTitle } from '@pages/popup/components/video/section/article/videoInfo/video-title';

export const StyledVideoInfos = ({ publishedAt, views, title }: Pick<IVideo, 'publishedAt' | 'views' | 'title'>) => {
  const { t } = useTranslation();

  return (
    <Stack useFlexGap={true} spacing={1}>
      <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} useFlexGap={true} spacing={2}>
        <StyledVideoInfo>{t('timeAgo', { date: new Date(publishedAt) })}</StyledVideoInfo>
        <StyledVideoInfo>
          {views} {t('views')}
        </StyledVideoInfo>
      </Stack>

      <StyledVideoTitle>{title}</StyledVideoTitle>
    </Stack>
  );
};
