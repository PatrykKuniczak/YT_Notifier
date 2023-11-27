import { i18n, useTranslation } from '@internationalization';
import { Portal } from '@mui/base';
import { ThemeProvider } from '@mui/system';
import GlobalStyles from '@utils/data/global-styles';
import theme from '@utils/data/themes/dark-theme';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';

injectStyle();

function App() {
  const { t } = useTranslation();

  chrome.runtime.onMessage.addListener(({ loadedVideosAmount, lang }) => {
    if (loadedVideosAmount) {
      i18n.changeLanguage(lang);
      toast(<p style={{ marginLeft: '15px' }}>{t('videosLoaded', { loadedVideosAmount })}</p>, {
        icon: <img alt={t('pluginLogo')} src={chrome.runtime.getURL('logo-32.png')} />,
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
