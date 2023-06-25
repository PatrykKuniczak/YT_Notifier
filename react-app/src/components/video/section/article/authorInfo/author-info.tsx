import { StyledAuthorName } from './autor-name.ts';
import { Stack } from '@mui/system';
import thumbnail from '../../../../../assets/thumbnail.png';
import { StyledAvatar } from '../../../../shared/avatar.ts';

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
