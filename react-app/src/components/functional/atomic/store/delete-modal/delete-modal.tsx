import { Modal } from '@mui/base';
import { styled } from '@mui/system';
import { forwardRef } from 'react';
import clsx from 'clsx';
import { TVoid } from '../../../../../types/common.types.ts';
import { StyledModalContent } from '../../../../ui/atomic/store/modal-content.tsx';

const Backdrop = forwardRef<
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

const StyledModal = styled(Modal)(({ theme }) =>
    theme.unstable_sx({
        position: 'fixed',
        zIndex: 1,

        inset: 1,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    })
);

const StyledBackdrop = styled(Backdrop)(({ theme }) =>
    theme.unstable_sx({
        position: 'fixed',
        zIndex: -1,

        inset: 1,

        bgcolor: '#0000007F'
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
        onClose={changeModalVisibility}
        slots={{ backdrop: StyledBackdrop }}>
        <>
            <StyledModalContent changeModalVisibility={changeModalVisibility} />
        </>
    </StyledModal>
);
