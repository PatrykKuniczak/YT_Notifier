import { i18n, useTranslation } from '@internationalization';
import { Portal } from '@mui/base';
import { ThemeProvider } from '@mui/system';
import GlobalStyles from '@utils/data/global-styles';
import theme from '@utils/data/themes/dark-theme';
import { toast, ToastContainer } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';

injectStyle();

function App() {
  const { t } = useTranslation();

  chrome.runtime.sendMessage({ isNotDefaultPage: !!window.location.href });

  chrome.runtime.onMessage.addListener(({ loadedVideosAmount, videosFetchingError }) => {
    i18n.changeLanguage(window.navigator.language);
    if (loadedVideosAmount) {
      toast(<p style={{ marginLeft: '15px' }}>{t('videosLoaded', { loadedVideosAmount })}</p>, {
        icon: <img alt={t('pluginLogo')} src={chrome.runtime.getURL('logo-32.png')} />,
        toastId: 'notification',
      });
    } else if (videosFetchingError) {
      toast.error(t([`playlistErrors.${videosFetchingError}`, 'fallbackError']), {
        toastId: 'notification',
      });
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Portal>
        <ToastContainer position="bottom-right" theme="dark" autoClose={false} />
      </Portal>
    </ThemeProvider>
  );
}

export default App;
