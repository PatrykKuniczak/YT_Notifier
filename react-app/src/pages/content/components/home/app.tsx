import xIcon from '@assets/img/x-icon.svg';
import { i18n, useTranslation } from '@internationalization';
import { Portal } from '@mui/base';
import { ThemeProvider } from '@mui/system';
import { StyledIcon } from '@pages/popup/components/shared/icon';
import GlobalStyles from '@utils/data/global-styles';
import theme from '@utils/data/themes/dark-theme';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';

injectStyle();

function App() {
  const { t } = useTranslation();
  const [shouldFetch, setShouldFetch] = useState(true);

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

  useEffect(() => {
    chrome.runtime.sendMessage({ shouldFetch });
  }, [shouldFetch]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Portal>
        <ToastContainer
          position="bottom-right"
          theme="dark"
          autoClose={false}
          closeButton={
            <button
              style={{
                alignItems: 'self-start',
                height: 'fit-content',
                marginTop: '10px',
                cursor: 'pointer',
                backgroundColor: 'transparent',
              }}
              type="button"
              onClick={() => setShouldFetch(false)}>
              <StyledIcon src={xIcon} alt={''} width={25} height={25} />
            </button>
          }
        />
      </Portal>
    </ThemeProvider>
  );
}

export default App;
