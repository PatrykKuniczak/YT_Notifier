import withErrorBoundary from '@hooks/with-error-boundary';
import httpClient, { AxiosError } from '@http-client';
import { IProvidedAuthValues, IUser } from '@interfaces';
import { useTranslation } from '@internationalization';
import AuthPage from '@pages/popup/pages/auth/auth.page';
import { ErrorPage } from '@pages/popup/pages/error/ErrorPage';
import HomePage from '@pages/popup/pages/home/home.page';
import { ProtectedPage } from '@pages/popup/pages/protected.page';
import ProvidersWrapper from '@pages/popup/providers-wrapper';
import { StoreRoute } from '@pages/popup/routes/store.route';
import { VideosRoute } from '@pages/popup/routes/videos.route';
import { useQuery } from '@query-client';
import urls from '@utils/endpoints/urls';
import React, { useMemo } from 'react';
import { createHashRouter } from 'react-router-dom';
import { toast } from 'react-toastify';

const hashRouting = (authValues: IProvidedAuthValues) =>
  createHashRouter([
    {
      path: '/',
      element: (
        <ProtectedPage authValues={authValues}>
          <HomePage />
        </ProtectedPage>
      ),
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

  if (error && error.response?.status !== 401) {
    toast.error(t('loggingInFailed'), {
      toastId: `${urls.auth.me}-error`,
    });
  }

  const authProviderValues: IProvidedAuthValues = useMemo(() => ({ user, userIsLoading }), [user, userIsLoading]);

  return <ProvidersWrapper authProviderValues={authProviderValues} hashRouting={hashRouting(authProviderValues)} />;
};

export default withErrorBoundary(Popup, <ErrorPage />);
