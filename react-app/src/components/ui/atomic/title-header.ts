import { styled } from '@mui/system';
import { textMixin } from '../../../data/mixins/text-mixin.ts';

export const StyledTitleHeader = styled('header')(({ theme }) =>
    theme.unstable_sx({
        ...textMixin,

        width: 290,

        p: 2,

        fontSize: 'fontSize.xl',
        fontWeight: 'fontWeight.bold'
    })
);
