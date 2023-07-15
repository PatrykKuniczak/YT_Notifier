import useSnackbar from '@mui/base/useSnackbar';
import { useCallback, useState } from 'react';
import exclamationOctagonIcon from '../../../assets/exclamation-octagon-icon.svg';
import { StyledIcon } from '../icon.ts';
import { useUpdateEffect } from 'usehooks-ts';
import { StyledSnackbar } from './error-snackbar.tsx';

const useErrorSnackbar = () => {
    const [open, setOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleClose = useCallback(() => {
        setOpen(false);
        setErrorMessage('');
    }, []);

    const { getRootProps } = useSnackbar({
        onClose: handleClose,
        open,
        autoHideDuration: 4000
    });

    const handleErrorMessage = (message: string) => {
        setErrorMessage(message);
    };

    useUpdateEffect(() => {
        errorMessage && setOpen(true);
    }, [errorMessage]);

    return {
        StyledErrorSnackbar: (
            <>
                {open && (
                    <StyledSnackbar {...getRootProps()}>
                        <StyledIcon
                            src={exclamationOctagonIcon}
                            alt={'Exclamation octagon'}
                            width={20}
                            height={20}
                        />
                        {errorMessage}
                    </StyledSnackbar>
                )}
            </>
        ),
        handleErrorMessage
    };
};

export default useErrorSnackbar;
