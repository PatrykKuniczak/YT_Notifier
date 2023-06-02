import { styled } from '@mui/system';
import { textMixIn } from '../data/mixins/text-mixin.ts';

export const StyledVideoInformation = styled('header')(({ theme }) =>
    theme.unstable_sx({
        ...textMixIn,

        p: 1,

        fontSize: 'fontSize.sm',
        fontWeight: 'fontWeight.normal',
        fontStyle: 'italic'
    })
);
