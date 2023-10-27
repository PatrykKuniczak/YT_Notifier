import { AuthContext } from '@authentication';
import { IUser } from '@interfaces';
import { ThemeProvider } from '@mui/system';
import GlobalStyles from '@utils/data/global-styles';
import darkTheme from '@utils/data/themes/dark-theme';
import lightTheme from '@utils/data/themes/light-theme';
import { Router as RemixRouter } from '@remix-run/router/dist/router';
import i18n from 'i18next';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProvidersWrapper = ({
  isDarkMode,
  authProviderValues,
  hashRouting,
}: {
  isDarkMode: boolean;
  authProviderValues: { user: IUser; userIsLoading: boolean };
  hashRouting: RemixRouter;
}) => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <button onClick={() => i18n.changeLanguage('pl')}>Click me</button>
        <AuthContext.Provider value={authProviderValues}>
          <RouterProvider router={hashRouting} />
        </AuthContext.Provider>
        <ToastContainer
          theme={isDarkMode ? 'dark' : 'light'}
          position="bottom-center"
          autoClose={5000}
          draggablePercent={50}
        />
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default ProvidersWrapper;
