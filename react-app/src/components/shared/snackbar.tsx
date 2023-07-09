import { css, keyframes, styled } from '@mui/system';
import useSnackbar from '@mui/base/useSnackbar';
import { useEffect, useState } from 'react';

const Snackbar = ({
    opened,
    content
}: {
    opened: boolean;
    content: string;
}) => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const { getRootProps } = useSnackbar({
        onClose: handleClose,
        open,
        autoHideDuration: 5000
    });

    useEffect(() => {
        opened && setOpen(true);
    }, [opened]);

    return (
        <>
            {open && (
                <CustomSnackbar {...getRootProps()}>{content}</CustomSnackbar>
            )}
        </>
    );
};

const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f'
};

const snackbarInRight = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
`;

const CustomSnackbar = styled('div')(
    ({ theme }) => css`
        position: fixed;
        z-index: 5500;
        display: flex;
        right: 16px;
        bottom: 16px;
        left: auto;
        justify-content: start;
        max-width: 560px;
        min-width: 300px;
        background-color: ${theme.palette.mode === 'dark'
            ? grey[900]
            : grey[50]};
        border-radius: 8px;
        border: 1px solid
            ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
        box-shadow: ${theme.palette.mode === 'dark'
            ? `0 2px 8px rgb(0 0 0 / 0.5)`
            : `0 2px 8px ${grey[200]}`};
        padding: 0.75rem;
        color: ${theme.palette.mode === 'dark' ? grey[50] : grey[900]};
        font-family: 'IBM Plex Sans', sans-serif;
        font-weight: 600;
        animation: ${snackbarInRight} 200ms;
        transition: transform 0.2s ease-out;
    `
);

export default Snackbar;
