import { Stack } from '@mui/system';
import { StyledVideoInfo } from '@pages/popup/components/video/section/article/videoInfo/video-info';
import { StyledVideoTitle } from '@pages/popup/components/video/section/article/videoInfo/video-title';
import { StyledSkeleton } from '@pages/popup/components/shared/custom-skeleton';

export const StyledVideoInfos = ({ isLoading }: { isLoading: boolean }) => (
  <Stack useFlexGap={true} spacing={1}>
    {isLoading ? (
      <StyledSkeleton />
    ) : (
      <Stack direction={'row'} alignItems={'center'} useFlexGap={true} spacing={2}>
        <StyledVideoInfo>11 miesięcy temu</StyledVideoInfo>
        <StyledVideoInfo>1 mld wyświetleń</StyledVideoInfo>
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
