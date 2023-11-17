import { Stack } from '@mui/system';
import { StyledSkeleton } from '@pages/popup/components/shared/styled-skeleton';

export const StyledAuthorInfoSkeleton = () => (
  <Stack direction={'row'} alignItems={'center'} useFlexGap={true} spacing={1}>
    <StyledSkeleton circle={true} width={24} height={24} />
    <StyledSkeleton width={208} height={12} />
  </Stack>
);
