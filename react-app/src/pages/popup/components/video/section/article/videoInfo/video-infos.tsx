import { Stack } from '@mui/system';
import { StyledVideoInfo } from '@pages/popup/components/video/section/article/videoInfo/video-info';
import { StyledVideoTitle } from '@pages/popup/components/video/section/article/videoInfo/video-title';
import { useTranslation } from 'react-i18next';
import { StyledSkeleton } from '@pages/popup/components/shared/styled-skeleton';

export const StyledVideoInfos = ({ isLoading }: { isLoading: boolean }) => {
  const { t } = useTranslation();

  return (
    <Stack useFlexGap={true} spacing={1}>
      {isLoading ? (
        <StyledSkeleton />
      ) : (
        <Stack direction={'row'} alignItems={'center'} useFlexGap={true} spacing={2}>
          <StyledVideoInfo>{t('timeAgo', { date: new Date(2021, 1, 1) })}</StyledVideoInfo>
          <StyledVideoInfo>1 mld {t('views')}</StyledVideoInfo>
        </Stack>
      )}

      {isLoading ? (
        <StyledSkeleton />
      ) : (
        <StyledVideoTitle>
          Hodujemy gatunek, który będzie dominował nad nami Hodujemy gatunek, który będzie dominował nad nami
        </StyledVideoTitle>
      )}
    </Stack>
  );
};
