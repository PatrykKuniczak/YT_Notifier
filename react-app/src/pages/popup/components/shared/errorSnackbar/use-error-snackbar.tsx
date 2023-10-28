import exclamationOctagonIcon from '@assets/img/exclamation-octagon-icon.svg';
import { useSnackbar } from '@mui/base/useSnackbar';
import { StyledSnackbar } from '@pages/popup/components/shared/errorSnackbar/error-snackbar';
import { StyledIcon } from '@pages/popup/components/shared/icon';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useUpdateEffect } from 'usehooks-ts';

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
    autoHideDuration: 4000,
  });

  const { t } = useTranslation();

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
            <StyledIcon src={exclamationOctagonIcon} alt={t('alts.exclamationOctagon')} width={20} height={20} />
            {errorMessage}
          </StyledSnackbar>
        )}
      </>
    ),
    handleErrorMessage,
  };
};

export default useErrorSnackbar;
