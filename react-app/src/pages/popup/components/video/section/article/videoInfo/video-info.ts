import { styled } from '@mui/system';
import { textMixin } from '@utils/data/mixins/text-mixin';

export const StyledVideoInfo = styled('span')(({ theme }) =>
  theme.unstable_sx({
    ...textMixin,

    fontWeight: 'fontWeight.normal',
    fontSize: 'fontSize.sm',

    '&:nth-child(2)': {
      position: 'relative',
    },

    '&:nth-child(2)::before': {
      content: '""',
      position: 'absolute',

      display: 'inline-block',

      bottom: 'calc(50% - 2px)',
      left: -10,

      width: 4,
      height: 4,

      borderRadius: '50%',

      background: '#bdbdbd',
    },
  }),
);
