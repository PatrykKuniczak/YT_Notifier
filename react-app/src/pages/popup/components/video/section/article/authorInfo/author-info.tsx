import thumbnail from '@assets/img/thumbnail.png';
import { Stack } from '@mui/system';
import { StyledAvatar } from '@pages/popup/components/shared/avatar';
import { StyledAuthorName } from '@pages/popup/components/video/section/article/authorInfo/autor-name';
import { CustomSkeleton } from '@pages/popup/components/shared/custom-skeleton';

export const StyledAuthorInfo = ({ isLoading }: { isLoading: boolean }) => (
  <Stack direction={'row'} alignItems={'center'} useFlexGap={true} spacing={1}>
    {isLoading ? (
      <CustomSkeleton circle={true} width={24} height={24} />
    ) : (
      <StyledAvatar src={thumbnail} width={24} height={24} />
    )}

    {isLoading ? <CustomSkeleton width={208} height={12} /> : <StyledAuthorName>XYZ Franko</StyledAuthorName>}
  </Stack>
);
