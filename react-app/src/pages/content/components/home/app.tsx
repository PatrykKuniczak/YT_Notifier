import { ThemeProvider } from '@mui/system';
import Notification from '@pages/content/components/notification/notification';
import GlobalStyles from '@utils/data/global-styles';
import theme from '@utils/data/themes/dark-theme';
import React, { useState } from 'react';

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
        opened={opened}
        toggleOpen={toggleOpen}
        content={`Spod podanych slów kluczowych, pobrano ${loadedVideosAmount} wideo, sprawdź we wtyczce.`}
      />
    </ThemeProvider>
  );
}
