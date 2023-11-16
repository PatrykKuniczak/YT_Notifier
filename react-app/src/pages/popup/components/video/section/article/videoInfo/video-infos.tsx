import { Stack } from '@mui/system';
import { StyledVideoInfo } from '@pages/popup/components/video/section/article/videoInfo/video-info';
import { StyledVideoTitle } from '@pages/popup/components/video/section/article/videoInfo/video-title';
import { useTranslation } from 'react-i18next';
import { StyledSkeleton } from '@pages/popup/components/shared/styled-skeleton';
interface Video {
  publishedAt: string;
  views: string;
  title: string;
}
export const StyledVideoInfos = ({ publishedAt, views, title, isLoading }: Video & { isLoading: boolean }) => {
  const { t } = useTranslation();

  const publishedDate = new Date(publishedAt);
  const year = publishedDate.getFullYear();
  const month = publishedDate.getMonth();
  const day = publishedDate.getDate();

  return (
    <Stack useFlexGap={true} spacing={1}>
      {isLoading ? (
        <StyledSkeleton />
      ) : (
        <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} useFlexGap={true} spacing={2}>
          <StyledVideoInfo>{t('timeAgo', { date: new Date(year, month, day) })}</StyledVideoInfo>
          <StyledVideoInfo>
            {views} {t('views')}
          </StyledVideoInfo>
        </Stack>
      )}

      {isLoading ? <StyledSkeleton /> : <StyledVideoTitle>{title}</StyledVideoTitle>}
    </Stack>
  );
};
