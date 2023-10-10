import React, { useMemo } from "react";
import { createHashRouter } from "react-router-dom";
import AuthPage from "@pages/popup/pages/auth/auth.page";
import HomePage from "@pages/popup/pages/home/home.page";
import { VideosRoute } from "@pages/popup/routes/videos.route";
import { StoreRoute } from "@pages/popup/routes/store.route";
import { useTernaryDarkMode } from "usehooks-ts";
import { IUser } from "@root/utils/interfaces/user.interface";
import urls from "@root/utils/endpoints/urls";
import { useQuery } from "@tanstack/react-query";
import withErrorBoundary from "@root/utils/hooks/with-error-boundary";
import withSuspense from "@root/utils/hooks/with-suspense";
import httpClient from "@root/utils/core/http-client/httpClient";
import ProvidersWrapper from "@pages/popup/providers-wrapper";

const hashRouting = createHashRouter([
    {
      path: "/",
      element: <HomePage />,
      children: [
        {
          index: true,
          element: <VideosRoute />
        },

        {
          path: "store",
          element: <StoreRoute />
        }
      ]
    },

    {
      path: "/auth/login",
      element: <AuthPage />
    }
  ])
;

const Popup = () => {
  const { isDarkMode } = useTernaryDarkMode();

  const { data: user } = useQuery<IUser>({
    queryKey: [urls.auth.me],
    queryFn: () => httpClient.post(urls.auth.me).then(user => user.data)
  });

  const providerValues = useMemo(() => ({
    user
  }), [user]);

  return (<ProvidersWrapper isDarkMode={isDarkMode} authProviderValues={providerValues} hashRouting={hashRouting} />);
};

export default withErrorBoundary(withSuspense(Popup, <div> Loading </div>), <div> Error </div>);
