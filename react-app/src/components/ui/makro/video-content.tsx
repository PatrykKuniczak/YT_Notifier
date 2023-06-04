import { StyledThumbnail } from '../atomic/thumbnail.ts';
import { Stack } from '@mui/system';
import thumbinail from '../../../assets/thumbnail.png';
import { StyledAuthorInfo } from '../micro/author-info.tsx';
import { StyledVideoInfos } from '../micro/video-infos.tsx';

export const StyledVideoContent = () => {
    return (
        <Stack
            component={'article'}
            direction={'column'}
            justifyContent={'center'}
            spacing={1}
            sx={{ p: 1, borderRadius: 1, bgcolor: 'color.secondary' }}>
            <StyledThumbnail src={thumbinail} />
            <StyledAuthorInfo />
            <StyledVideoInfos />
        </Stack>
    );
};
