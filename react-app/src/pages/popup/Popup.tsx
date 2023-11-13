import useLanguageSwitch from '@hooks/use-language-switch';
import withErrorBoundary from '@hooks/with-error-boundary';
import withSuspense from '@hooks/with-suspense';
import httpClient, { AxiosError } from '@http-client';
import { IUser } from '@interfaces';
import AuthPage from '@pages/popup/pages/auth/auth.page';
import HomePage from '@pages/popup/pages/home/home.page';
import ProvidersWrapper from '@pages/popup/providers-wrapper';
import { StoreRoute } from '@pages/popup/routes/store.route';
import { VideosRoute } from '@pages/popup/routes/videos.route';
import { useQuery } from '@query-client';
import urls from '@utils/endpoints/urls';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { createHashRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ErrorPage } from '@pages/popup/pages/error/ErrorPage';

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

  useLanguageSwitch();

  const {
    data: user,
    error,
    isLoading: userIsLoading,
  } = useQuery<IUser, AxiosError>({
    queryKey: [urls.auth.me],
    queryFn: () => httpClient.get(urls.auth.me).then(user => user.data),
    retry: false,
  });

  const { t } = useTranslation();

  if (error && error.response.status !== 401) {
    toast.error(t('loggingInFailed'), {
      toastId: `${urls.auth.me}-error`,
    });
  }

  return (
    <ProvidersWrapper authProviderValues={{ user, userIsLoading }} hashRouting={hashRouting} />
  );
};

export default withErrorBoundary(withSuspense(Popup, <div> Loading </div>), <ErrorPage />);
