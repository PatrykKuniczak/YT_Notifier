import { styled } from '@mui/system';
import { textMixin } from '../../../data/mixins/text-mixin.ts';

export const StyledTitle = styled('header')(({ theme }) =>
    theme.unstable_sx({
        ...textMixin,

        p: 2,

        fontSize: 'fontSize.xl',
        fontWeight: 'fontWeight.bold'
    })
);
