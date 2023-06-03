import { styled } from '@mui/system';
import { textMixin } from '../../../data/mixins/text-mixin.ts';

export const StyledAuthorName = styled('p')(({ theme }) =>
    theme.unstable_sx({
        ...textMixin,

        width: 'fit-content',

        fontSize: 'fontSize.md'
    })
);
