import { styled } from '@mui/system';

const Avatar = styled('img')(({ theme, width, height }) =>
    theme.unstable_sx({
        size: { width, height },

        borderRadius: '50%'
    })
);

export default Avatar;
