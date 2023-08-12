import { styled } from '@mui/system';
import { Button } from '@mui/base/Button';

export const StyledButton = styled(Button)(({ theme }) =>
    theme.unstable_sx({
        height: 20,

        color: '#fff',
        background: 'none',

        '&:hover': {
            opacity: 0.8,
            filter: 'blur(0.3px)',
            cursor: 'pointer'
        }
    })
);
