import { Modal } from '@mui/base';
import { Box, styled } from '@mui/system';
import { forwardRef } from 'react';
import clsx from 'clsx';
import { TVoid } from "@pages/popup/types/common.types";
import { StyledModalContent } from "@pages/popup/components/store/delete-modal/modal-content";

const StyledMUIBackdrop = forwardRef<
    HTMLDivElement,
    { open: boolean; className: string }
>((props, ref) => {
    const { open, className, ...other } = props;

    return (
        <div
            className={clsx({ 'MuiBackdrop-open': open }, className)}
            ref={ref}
            {...other}
        />
    );
});

const StyledBackdrop = styled(StyledMUIBackdrop)(({ theme }) =>
    theme.unstable_sx({
        position: 'fixed',
        zIndex: -1,

        inset: 0,

        backgroundColor: '#0000007F'
    })
);

const StyledModal = styled(Modal)(({ theme }) =>
    theme.unstable_sx({
        position: 'fixed',
        zIndex: 1,

        inset: 0,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    })
);

export const StyledDeleteModal = ({
    open,
    changeModalVisibility
}: {
    open: boolean;
    changeModalVisibility: TVoid;
}) => (
    <StyledModal
        open={open}
        slots={{ backdrop: StyledBackdrop }}
        onClose={changeModalVisibility}
        tabIndex={-1}>
        <Box>
            <StyledModalContent changeModalVisibility={changeModalVisibility} />
        </Box>
    </StyledModal>
);
