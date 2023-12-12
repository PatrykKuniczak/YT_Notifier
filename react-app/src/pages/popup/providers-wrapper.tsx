import { AuthContext } from '@authentication';
import { IProvidedAuthValues } from '@interfaces';
import { Router as RemixRouter } from '@remix-run/router/dist/router';
import GlobalStyles from '@utils/data/global-styles';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const ProvidersWrapper = ({
  authProviderValues,
  hashRouting,
}: {
  authProviderValues: IProvidedAuthValues;
  hashRouting: RemixRouter;
}) => {
  return (
    <React.StrictMode>
      <GlobalStyles />

      <AuthContext.Provider value={authProviderValues}>
        <RouterProvider router={hashRouting} />
      </AuthContext.Provider>
    </React.StrictMode>
  );
};

export default ProvidersWrapper;
