import { styled } from "@mui/system";
import { Button } from "@mui/base/Button";

export const StyledButton = styled(Button)(({ theme }) =>
    theme.unstable_sx({
        height: 20,
        color: '#fff',
        background: 'none',

        '&:hover': {
            opacity: 0.8,
            filter: 'blur(0.3px)',
            cursor: 'pointer'
        },

        '&.Mui-focusVisible': {
            outline: `2px solid ${theme.palette.background.focusOutline}`
        },

        '&.active': {
          borderRadius: '60px',

          boxShadow:
                'inset 0px 0px 4px 10px #6238c7, 0px 0px 4px 10px #6238c7;',

          transition: 'linear 0.15s'
        }
    })
);
