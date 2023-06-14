import { styled } from '@mui/system';
import { textMixin } from '../../../../data/mixins/text-mixin.ts';

export const StyledKeyword = styled('span')(({ theme }) =>
    theme.unstable_sx({
        ...textMixin
    })
);
