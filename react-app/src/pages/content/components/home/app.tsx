import { i18n, useTranslation } from '@internationalization';
import { Portal } from '@mui/base';
import { ThemeProvider } from '@mui/system';
import { CustomToast, ErrorToast } from '@pages/content/components/error-toast';
import GlobalStyles from '@utils/data/global-styles';
import theme from '@utils/data/themes/dark-theme';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';

injectStyle();

function App() {
  const { t } = useTranslation();
  const [shouldFetch, setShouldFetch] = useState(true);

  chrome.runtime.onMessage.addListener(
    ({
      loadedVideosAmount,
      videosFetchingError,
      closeNotification,
      contentMenuValidationError,
      contentMenuErrorCause,
      contentMenuSuccess,
    }) => {
      i18n.changeLanguage(navigator.language);
      if (loadedVideosAmount) {
        CustomToast(t, t('videosLoaded', { loadedVideosAmount }), {
          toastId: 'notification',
          onClick: () => setShouldFetch(false),
          autoClose: 7000,
        });
      } else if (videosFetchingError) {
        const message = t([
          videosFetchingError === 'unauthorized' ? videosFetchingError : `playlistErrors.${videosFetchingError}`,
          'fallbackError',
        ]);

        ErrorToast(t, message, {
          toastId: 'notificationError',
          onClick: () => setShouldFetch(false),
          autoClose: 7000,
        });
      } else if (closeNotification) {
        toast.dismiss('notification');
        toast.dismiss('notificationError');
      } else if (contentMenuValidationError) {
        ErrorToast(t, t('validation'), { toastId: 'validation' });
      } else if (contentMenuErrorCause) {
        const message = t([
          contentMenuErrorCause === 'unauthorized' ? contentMenuErrorCause : `keywordErrors.${contentMenuErrorCause}`,
          'fallbackError',
        ]);
        ErrorToast(t, message, { toastId: 'loginError' });
      } else if (contentMenuSuccess) {
        CustomToast(t, t('createdKeyword'), { toastId: 'createdKeyword' });
      }
    },
  );

  useEffect(() => {
    chrome.runtime.sendMessage({ shouldFetch });
  }, [shouldFetch]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Portal>
        <ToastContainer position="bottom-right" theme="dark" autoClose={3000} />
      </Portal>
    </ThemeProvider>
  );
}

export default App;
