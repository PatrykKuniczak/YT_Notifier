import Notification from '@pages/content/components/notification/notification';
import React, { useState } from 'react';
import { ThemeProvider } from '@mui/system';
import theme from '@pages/content/data/theme';
import GlobalStyles from '@pages/content/data/global-styles';

export default function App() {
  const [open, setOpen] = useState(false);
  const [loadedVideosAmount, setLoadedVideosAmount] = useState(0);

  const toggleOpen = () => {
    setOpen(prevState => !prevState);
  };

  chrome.runtime.onMessage.addListener(({ loadedVideos }) => {
    if (loadedVideos) {
      setLoadedVideosAmount(loadedVideos);
      setOpen(true);
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Notification
        open={open}
        toggleOpen={toggleOpen}
        content={`Spod podanych slów kluczowych, pobrano ${loadedVideosAmount} wideo, sprawdz we wtyczce.`}
      />
    </ThemeProvider>
  );
}
