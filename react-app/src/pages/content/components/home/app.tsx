import { i18n, useTranslation } from '@internationalization';
import { Portal } from '@mui/base';
import { ThemeProvider } from '@mui/system';
import GlobalStyles from '@utils/data/global-styles';
import theme from '@utils/data/themes/dark-theme';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';

injectStyle();

function App() {
  const [loadedVideosAmount, setLoadedVideosAmount] = useState(0);
  const { t } = useTranslation();

  chrome.runtime.onMessage.addListener(({ loadedVideos, lang }) => {
    if (loadedVideos) {
      i18n.changeLanguage(lang);
      setLoadedVideosAmount(loadedVideos);
      toast.info(t('videosLoaded', { loadedVideosAmount }), {
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
