import { InputHTMLAttributes } from 'react';
import { useFormControlContext } from '@mui/base';

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
    const formControlContext = useFormControlContext();

    if (!formControlContext) {
        return null;
    }

    const { value, required, onChange, disabled, onFocus, onBlur } =
        formControlContext;

    return (
        <input
            {...props}
            value={value as string}
            required={required}
            onChange={onChange}
            disabled={disabled}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    );
};

export default Input;
