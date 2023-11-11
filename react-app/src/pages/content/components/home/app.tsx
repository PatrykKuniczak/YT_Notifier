import { ThemeProvider } from '@mui/system';
import { i18n } from '@pages/internationalization';
import GlobalStyles from '@utils/data/global-styles';
import theme from '@utils/data/themes/dark-theme';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { injectStyle } from 'react-toastify/dist/inject-style';
import { ToastContainer, toast } from 'react-toastify';
import { Portal } from '@mui/base';

injectStyle();
i18n.init();

function App() {
  const [loadedVideosAmount, setLoadedVideosAmount] = useState(0);

  const { t } = useTranslation();

  chrome.runtime.onMessage.addListener(({ loadedVideos }) => {
    if (loadedVideos) {
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
