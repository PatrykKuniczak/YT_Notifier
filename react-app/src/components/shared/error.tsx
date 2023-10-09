import { styled } from '@mui/system';
import { useFormControlContext } from '@mui/base';
import { useEffect, useState } from 'react';

export const ErrorMessage = styled(props => {
    const formControlContext = useFormControlContext();
    const [dirty, setDirty] = useState(false);

    useEffect(() => {
        if (formControlContext?.filled) {
            setDirty(true);
        }
    }, [formControlContext]);

    if (!formControlContext) {
        return null;
    }

    const { required, filled } = formControlContext;
    const showRequiredError = dirty && required && !filled;

    return showRequiredError ? <p {...props}>To pole jest wymagane!</p> : null;
})(({ theme }) =>
    theme.unstable_sx({
        position: 'absolute',
        bottom: '35px',
        left: '12px',

        p: 1,
        mb: 0.5,
        borderRadius: 1,

        color: 'color.danger',
        backgroundColor: 'background.purple'
    })
);
