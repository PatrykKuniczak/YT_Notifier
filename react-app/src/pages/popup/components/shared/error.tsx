import useValidate from '@hooks/use-validate';
import { useFormControlContext } from '@mui/base';
import { styled } from '@mui/system';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const StyledErrorMessage = styled(props => {
  const formControlContext = useFormControlContext();
  const { isValid, handleValidation } = useValidate();
  const { t } = useTranslation();

  if (!formControlContext) {
    return null;
  }

  const { value } = formControlContext;

  useEffect(() => {
    if (typeof value !== 'string') {
      throw new Error('Value is not a string');
    }
    handleValidation(value);
  }, [formControlContext, handleValidation, value]);

  return !isValid ? <p {...props}>{t('validation')}</p> : null;
})(({ theme }) =>
  theme.unstable_sx({
    p: 1,

    color: 'color.danger',

    fontWeight: 'bold',
  }),
);
