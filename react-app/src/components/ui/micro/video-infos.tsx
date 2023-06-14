import { Stack } from '@mui/system';
import { StyledVideoInfo } from '../atomic/video/video-info.ts';

export const StyledVideoInfos = () => (
    <Stack
        useFlexGap={true}
        spacing={1}>
        <Stack
            direction={'row'}
            alignItems={'center'}>
            <StyledVideoInfo>23h temu</StyledVideoInfo>
            <StyledVideoInfo>10000 views</StyledVideoInfo>
        </Stack>

        <StyledVideoInfo sx={{ alignSelf: 'start', fontSize: 'fontSize.md' }}>
            Hodujemy gatunek, który będzie dominował nad nami Hodujemy gatunek,
            który będzie dominował nad nami
        </StyledVideoInfo>
    </Stack>
);
