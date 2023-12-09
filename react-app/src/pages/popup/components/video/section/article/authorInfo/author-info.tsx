import { IVideo } from '@interfaces';
import { Stack } from '@mui/system';
import { StyledAvatar } from '@pages/popup/components/shared/avatar';
import { StyledAuthorName } from '@pages/popup/components/video/section/article/authorInfo/autor-name';
import { StyledVideoButton } from '@pages/popup/components/video/section/article/video-button';

export const StyledAuthorInfo = ({
  thumbnail: avatar,
  title: authorName,
  channelUrl,
}: Pick<IVideo, 'thumbnail' | 'title'> & { channelUrl: string }) => (
  <StyledVideoButton onClick={() => window.open(channelUrl)}>
    <Stack direction={'row'} alignItems={'center'} useFlexGap={true} spacing={1} width={'fit-content'}>
      <StyledAvatar src={avatar} width={24} height={24} />
      <StyledAuthorName>{authorName}</StyledAuthorName>
    </Stack>
  </StyledVideoButton>
);
