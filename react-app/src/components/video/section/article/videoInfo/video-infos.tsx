import { Stack } from '@mui/system';
import { StyledVideoInfo } from './video-info.ts';
import { StyledVideoTitle } from './video-title.ts';

export const StyledVideoInfos = () => (
    <Stack
        useFlexGap={true}
        spacing={1}>
        <Stack
            direction={'row'}
            alignItems={'center'}
            useFlexGap={true}
            spacing={2}>
            <StyledVideoInfo>11 miesięcy temu</StyledVideoInfo>
            <StyledVideoInfo>1 mld wyświetleń</StyledVideoInfo>
        </Stack>

        <StyledVideoTitle>
            Hodujemy gatunek, który będzie dominował nad nami Hodujemy gatunek,
            który będzie dominował nad nami
        </StyledVideoTitle>
    </Stack>
);
