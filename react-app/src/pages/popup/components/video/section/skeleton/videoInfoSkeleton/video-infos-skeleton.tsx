import { Stack } from '@mui/system';
import { StyledSkeleton } from '@pages/popup/components/shared/styled-skeleton';

export const StyledVideoInfosSkeleton = () => {
  return (
    <Stack useFlexGap={true} spacing={1}>
      <StyledSkeleton />
      <StyledSkeleton />
    </Stack>
  );
};
