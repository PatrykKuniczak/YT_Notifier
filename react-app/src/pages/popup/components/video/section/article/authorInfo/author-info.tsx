import { Stack } from '@mui/system';
import { StyledAvatar } from '@pages/popup/components/shared/avatar';
import thumbnail from '@assets/img/thumbnail.png';
import { StyledAuthorName } from '@pages/popup/components/video/section/article/authorInfo/autor-name';

export const StyledAuthorInfo = () => (
	<Stack direction={'row'} alignItems={'center'} useFlexGap={true} spacing={1}>
		<StyledAvatar src={thumbnail} width={24} height={24} />

		<StyledAuthorName>XYZ Franko</StyledAuthorName>
	</Stack>
);
