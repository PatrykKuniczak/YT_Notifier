import { styled } from '@mui/system';
import { textMixIn } from '../data/mixins/text-mixin.ts';

export const StyledAuthorName = styled('p')(({ theme }) =>
    theme.unstable_sx({
        ...textMixIn,

        size: {
            width: 35,
            height: 16
        }
    })
);
