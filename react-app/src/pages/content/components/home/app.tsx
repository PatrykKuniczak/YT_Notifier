import Notification from '@pages/content/components/notification/notification';
import React, { useState } from 'react';
import { ThemeProvider } from '@mui/system';
import theme from '@utils/data/themes/dark-theme';
import GlobalStyles from '@utils/data/global-styles';

export default function App() {
  const [opened, setOpened] = useState(false);
  const [loadedVideosAmount, setLoadedVideosAmount] = useState(0);

  const toggleOpen = () => {
    setOpened(prevState => !prevState);
  };

  chrome.runtime.onMessage.addListener(({ loadedVideos }) => {
    if (loadedVideos) {
      setLoadedVideosAmount(loadedVideos);
      setOpened(true);
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Notification
        open={opened}
        toggleOpen={toggleOpen}
        content={`Spod podanych slów kluczowych, pobrano ${loadedVideosAmount} wideo, sprawdz we wtyczce.`}
      />
    </ThemeProvider>
  );
}
