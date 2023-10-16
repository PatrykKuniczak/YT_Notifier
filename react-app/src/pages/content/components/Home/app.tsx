import xIcon from '@assets/img/x-icon.svg';
import { StyledIcon } from '@pages/popup/components/shared/icon';
import React, { useState } from 'react';
import { Portal } from '@mui/base';
import { styled, ThemeProvider } from '@mui/system';
import theme from '@pages/content/data/theme';
import GlobalStyles from '@pages/content/data/global-styles';

const StyledNotification = styled('div')(({ theme }) =>
  theme.unstable_sx({
    position: 'fixed',
    zIndex: 99999,

    bottom: 32,
    right: 32,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 1,

    maxWidth: 360,

    p: 2,
    borderRadius: 2,

    backgroundColor: theme.palette.background.purple,
  }),
);
const StyledNotificationContent = styled('p')(({ theme }) =>
  theme.unstable_sx({
    color: theme.palette.color.secondary,
  }),
);
const StyledNotificationButton = styled('button')(({ theme }) =>
  theme.unstable_sx({
    background: 'transparent',
  }),
);

export default function App() {
  const [open, setOpen] = useState(false);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const toggleOpen = () => {
    setOpen(prevState => !prevState);
  };

  chrome.runtime.onMessage.addListener(({ loadedVideos }) => {
    if (loadedVideos) {
      setLoadedVideos(loadedVideos);
      setOpen(true);
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      {open && (
        <Portal>
          <StyledNotification>
            <StyledNotificationButton onClick={toggleOpen}>
              <StyledIcon src={xIcon} alt={'X'} width={20} height={20} />
            </StyledNotificationButton>
            <StyledNotificationContent>
              Spod podanych slów kluczowych, pobrano {loadedVideos} wideo, sprawdz we wtyczce.
            </StyledNotificationContent>
          </StyledNotification>
        </Portal>
      )}
    </ThemeProvider>
  );
}
