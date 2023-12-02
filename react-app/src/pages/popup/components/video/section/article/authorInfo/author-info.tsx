import { IUserVideo } from '@interfaces';
import { Stack } from '@mui/system';
import { StyledAvatar } from '@pages/popup/components/shared/avatar';
import { StyledAuthorName } from '@pages/popup/components/video/section/article/authorInfo/autor-name';

export const StyledAuthorInfo = ({
  thumbnail: avatar,
  title: authorName,
  channelUrl,
}: Pick<IUserVideo['video'], 'thumbnail' | 'title'> & { channelUrl: string }) => (
  <Stack
    direction={'row'}
    alignItems={'center'}
    useFlexGap={true}
    spacing={1}
    width={'fit-content'}
    onClick={() => window.open(channelUrl)}>
    <StyledAvatar src={avatar} width={24} height={24} />
    <StyledAuthorName>{authorName}</StyledAuthorName>
  </Stack>
);
