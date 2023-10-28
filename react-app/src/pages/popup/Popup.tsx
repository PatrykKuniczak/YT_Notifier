import useLanguageSwitch from '@hooks/use-language-switch';
import useTernaryDarkMode from '@hooks/use-ternary-darkmode';
import withErrorBoundary from '@hooks/with-error-boundary';
import withSuspense from '@hooks/with-suspense';
import httpClient from '@http-client';
import { IUser } from '@interfaces';
import AuthPage from '@pages/popup/pages/auth/auth.page';
import HomePage from '@pages/popup/pages/home/home.page';
import ProvidersWrapper from '@pages/popup/providers-wrapper';
import { StoreRoute } from '@pages/popup/routes/store.route';
import { VideosRoute } from '@pages/popup/routes/videos.route';
import { useQuery } from '@query-client';
import urls from '@utils/endpoints/urls';
import React from 'react';
import { createHashRouter } from 'react-router-dom';
import '../internationalization';
import { toast } from 'react-toastify';

const hashRouting = createHashRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        index: true,
        element: <VideosRoute />,
      },

      {
        path: 'store',
        element: <StoreRoute />,
      },
    ],
  },

  {
    path: '/auth/login',
    element: <AuthPage />,
  },
]);
const Popup = () => {
  const { isDarkMode } = useTernaryDarkMode();

  useLanguageSwitch();

  const {
    data: user,
    error,
    isLoading: userIsLoading,
  } = useQuery<IUser>({
    queryKey: [urls.auth.me],
    queryFn: () => httpClient.get(urls.auth.me).then(user => user.data),
  });

  if (error !== null && error !== 401) {
    toast.error('Logowanie nie powiodło się', {
      toastId: `${urls.auth.me}-error`,
    });
  }

  return (
    <ProvidersWrapper isDarkMode={isDarkMode} authProviderValues={{ user, userIsLoading }} hashRouting={hashRouting} />
  );
};

export default withErrorBoundary(withSuspense(Popup, <div> Loading </div>), <div> Error </div>);
