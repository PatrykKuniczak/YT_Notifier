import { StyledAvatar } from '../atomic/avatar.ts';
import { StyledAuthorName } from '../atomic/autor-name.ts';
import { Stack } from '@mui/system';
import thumbinail from '../../../assets/thumbnail.png';

export const StyledAuthorInfo = () => {
    return (
        <Stack
            direction={'row'}
            alignItems={'center'}
            spacing={1}>
            <StyledAvatar
                src={thumbinail}
                width={24}
                height={24}
            />

            <StyledAuthorName>XYZ Franko</StyledAuthorName>
        </Stack>
    );
};
