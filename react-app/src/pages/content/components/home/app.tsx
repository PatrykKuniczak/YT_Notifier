import { ThemeProvider } from '@mui/system';
import GlobalStyles from '@utils/data/global-styles';
import theme from '@utils/data/themes/dark-theme';
import React, { useState } from 'react';
import { injectStyle } from 'react-toastify/dist/inject-style';
import { ToastContainer, toast } from 'react-toastify';
import { Portal } from '@mui/base';

injectStyle();

export default function App() {
  const [loadedVideosAmount, setLoadedVideosAmount] = useState(0);

  chrome.runtime.onMessage.addListener(({ loadedVideos }) => {
    if (loadedVideos) {
      setLoadedVideosAmount(loadedVideos);
      toast.info(`Spod podanych slów kluczowych, pobrano ${loadedVideosAmount} wideo, sprawdź we wtyczce.`, {
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
