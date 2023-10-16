import { useFormControlContext } from '@mui/base';
import { styled } from '@mui/system';
import { useEffect, useState } from 'react';

export const StyledErrorMessage = styled(props => {
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
    p: 1,

    color: 'color.danger',

    fontWeight: 'bold',
  }),
);
