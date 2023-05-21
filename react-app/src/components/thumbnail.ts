import { styled } from '@mui/system';

const Thumbnail = styled('img')(({ theme }) =>
    theme.unstable_sx({
        width: 200,
        height: 100,

        borderRadius: 2
    })
);

export default Thumbnail;
