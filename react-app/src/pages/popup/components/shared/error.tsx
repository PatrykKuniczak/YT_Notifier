import useValidate from '@hooks/use-validate';
import { useFormControlContext } from '@mui/base';
import { styled } from '@mui/system';
import { useEffect } from 'react';

export const StyledErrorMessage = styled(props => {
  const formControlContext = useFormControlContext();
  const { isValid, handleValidation } = useValidate();

  if (!formControlContext) {
    return null;
  }

  const { value } = formControlContext;

  useEffect(() => {
    if (typeof value !== 'string') {
      throw new Error('Value is not a string');
    }
    handleValidation(value.length);
  }, [formControlContext]);

  return !isValid ? <p {...props}>Podaj od 3 do 255 znaków!</p> : null;
})(({ theme }) =>
  theme.unstable_sx({
    p: 1,

    color: 'color.danger',

    fontWeight: 'bold',
  }),
);
