import { AuthContext } from '@authentication';
import { IUser } from '@interfaces';
import { ThemeProvider } from '@mui/system';
import GlobalStyles from '@pages/popup/data/global-styles';
import darkTheme from '@pages/popup/data/themes/dark-theme';
import lightTheme from '@pages/popup/data/themes/light-theme';
import { Router as RemixRouter } from '@remix-run/router/dist/router';
import React from 'react';
import { RouterProvider } from 'react-router-dom';

const ProvidersWrapper = ({
  isDarkMode,
  authProviderValues,
  hashRouting,
}: {
  isDarkMode: boolean;
  authProviderValues: { user: IUser };
  hashRouting: RemixRouter;
}) => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyles />

        <AuthContext.Provider value={authProviderValues}>
          <RouterProvider router={hashRouting} />
        </AuthContext.Provider>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default ProvidersWrapper;
