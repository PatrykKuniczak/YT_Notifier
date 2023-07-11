import { styled } from '@mui/system';
import useSnackbar from '@mui/base/useSnackbar';
import { useEffect, useState } from 'react';
import exclamationOctagonIcon from '../../assets/exclamation-octagon-icon.svg';
import { StyledIcon } from './icon';

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
                <CustomSnackbar {...getRootProps()}>
                    <StyledIcon
                        src={exclamationOctagonIcon}
                        alt={'Exclamation octagon'}
                        width={20}
                        height={20}
                    />
                    {content}
                </CustomSnackbar>
            )}
        </>
    );
};

const CustomSnackbar = styled('div')(({ theme }) =>
    theme.unstable_sx({
        position: 'absolute',
        zIndex: 5500,

        bottom: 16,
        left: 'auto',
        right: 16,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        gap: '0.5rem',

        width: 256,

        padding: '0.75rem',

        backgroundColor: theme.palette.background.snackbarBackground,
        color: theme.palette.color.snackbarContent,

        fontSize: '0.875rem',
        wordBreak: 'break-word',

        transition: 'transform 0.2s ease-out',

        borderRadius: 2
    })
);

export default Snackbar;
