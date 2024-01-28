import { i18n, useTranslation } from '@internationalization';
import { Portal } from '@mui/base';
import { ThemeProvider } from '@mui/system';
import { customToast, errorToast } from '@pages/content/components/error-toast';
import { StyledToastContainer } from '@pages/content/components/toast-container';
import theme from '@utils/data/themes/dark-theme';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';

injectStyle();

function App() {
  const { t } = useTranslation();

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
        customToast(t, t('videosLoaded', { loadedVideosAmount }), {
          toastId: 'notification',
          autoClose: 5000,
        });
      } else if (videosFetchingError) {
        const message = t([
          videosFetchingError === 'unauthorized' ? videosFetchingError : `playlistErrors.${videosFetchingError}`,
          'fallbackError',
        ]);

        errorToast(t, message, {
          toastId: 'notificationError',
          autoClose: 5000,
        });
      } else if (closeNotification) {
        toast.dismiss('notification');
        toast.dismiss('notificationError');
      } else if (contentMenuValidationError) {
        errorToast(t, t('validation'), { toastId: 'validation' });
      } else if (contentMenuErrorCause) {
        const message = t([
          contentMenuErrorCause === 'unauthorized' ? contentMenuErrorCause : `keywordErrors.${contentMenuErrorCause}`,
          'fallbackError',
        ]);
        errorToast(t, message, { toastId: 'loginError' });
      } else if (contentMenuSuccess) {
        customToast(t, t('createdKeyword'), { toastId: 'createdKeyword' });
      }
    },
  );

  useEffect(() => {
    chrome.storage.local.get('lastFetch').then(({ lastFetch }: { lastFetch: number }) => {
      const currentDay = new Date().setHours(0, 0, 0, 0);
      const lastFetchDay = new Date(lastFetch).setHours(0, 0, 0, 0);

      chrome.runtime.sendMessage({ shouldFetch: currentDay > lastFetchDay });
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Portal>
        <StyledToastContainer
          position={'bottom-right'}
          theme="dark"
          draggablePercent={50}
          closeOnClick={true}
          autoClose={3000}
        />
      </Portal>
    </ThemeProvider>
  );
}

export default App;
