import { Stack } from '@mui/system';
import { StyledAvatar } from '@pages/popup/components/shared/avatar';
import { StyledAuthorName } from '@pages/popup/components/video/section/article/authorInfo/autor-name';
import { IVideo } from '@interfaces';

export const StyledAuthorInfo = ({ avatar, authorName }: Pick<IVideo, 'avatar' | 'authorName'>) => (
  <Stack direction={'row'} alignItems={'center'} useFlexGap={true} spacing={1}>
    <StyledAvatar src={avatar} width={24} height={24} />
    <StyledAuthorName>{authorName}</StyledAuthorName>
  </Stack>
);
