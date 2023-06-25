import { styled } from '@mui/system';
import { StyledButton } from '../../shared/button.ts';

export const StyledModalButton = styled(StyledButton)(({ theme }) =>
    theme.unstable_sx({
        width: 100,
        height: 32,

        borderRadius: 10,

        backgroundColor: '#EF5D5D'
    })
);
