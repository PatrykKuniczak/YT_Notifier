import useLanguageSwitch from '@hooks/use-language-switch';
import useTernaryDarkMode from '@hooks/use-ternary-darkmode';
import '@internationalization';
import { ThemeProvider } from '@mui/system';
import Popup from '@pages/popup/Popup';
import queryClient, { QueryClientProvider } from '@query-client';
import darkTheme from '@utils/data/themes/dark-theme';
import lightTheme from '@utils/data/themes/light-theme';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import refreshOnUpdate from 'virtual:reload-on-update-in-view';

refreshOnUpdate('pages/popup');

const App = () => {
  const { isDarkMode } = useTernaryDarkMode();

  useLanguageSwitch();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Popup />
        <ToastContainer
          theme={isDarkMode ? 'dark' : 'light'}
          position="bottom-center"
          autoClose={5000}
          draggablePercent={50}
        />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

function init() {
  const appContainer = document.querySelector('#app-container');
  if (!appContainer) {
    throw new Error('Can not find #app-container');
  }

  const root = createRoot(appContainer);
  root.render(<App />);
}

init();
