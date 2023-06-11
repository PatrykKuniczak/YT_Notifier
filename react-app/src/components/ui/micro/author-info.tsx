import { StyledAvatar } from '../atomic/avatar.ts';
import { StyledAuthorName } from '../atomic/autor-name.ts';
import { Stack } from '@mui/system';
import thumbnail from '../../../assets/thumbnail.png';

export const StyledAuthorInfo = () => (
    <Stack
        direction={'row'}
        alignItems={'center'}
        useFlexGap={true}
        spacing={1}>
        <StyledAvatar
            src={thumbnail}
            width={24}
            height={24}
        />

        <StyledAuthorName>XYZ Franko</StyledAuthorName>
    </Stack>
);
