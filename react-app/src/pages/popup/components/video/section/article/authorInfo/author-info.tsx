import { Stack } from '@mui/system';
import { StyledAvatar } from '@pages/popup/components/shared/avatar';
import { StyledAuthorName } from '@pages/popup/components/video/section/article/authorInfo/autor-name';
import { StyledSkeleton } from '@pages/popup/components/shared/styled-skeleton';

interface Video {
  avatar: string;
  authorName: string;
}
export const StyledAuthorInfo = ({ avatar, authorName, isLoading }: Video & { isLoading: boolean }) => (
  <Stack direction={'row'} alignItems={'center'} useFlexGap={true} spacing={1}>
    {isLoading ? (
      <StyledSkeleton circle={true} width={24} height={24} />
    ) : (
      <StyledAvatar src={avatar} width={24} height={24} />
    )}

    {isLoading ? <StyledSkeleton width={208} height={12} /> : <StyledAuthorName>{authorName}</StyledAuthorName>}
  </Stack>
);
