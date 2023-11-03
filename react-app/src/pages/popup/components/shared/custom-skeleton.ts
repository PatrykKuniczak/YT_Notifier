import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { styled } from '@mui/system';

export const StyledSkeleton = styled(Skeleton)(({ theme }) =>
  theme.unstable_sx({
    '--base-color': `${theme.palette.background.loadingBase}`,

    '--highlight-color': `${theme.palette.background.loadingHighlight}`,

    zIndex: 0,
  }),
);
