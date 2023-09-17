import React from "react";
import withSuspense from "@pages/popup/hooks/with-suspense";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import ProtectedPage from "@pages/popup/pages/protected.page";
import AuthPage from "@pages/popup/pages/auth/auth.page";
import HomePage from "@pages/popup/pages/home/home.page";
import { VideosRoute } from "@pages/popup/routes/videos.route";
import { StoreRoute } from "@pages/popup/routes/store.route";


const routerBrowser = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedPage />,
    children: [
      {
        path: 'auth',
        element: <AuthPage />
      },

      {
        path: '',
        element: <HomePage />,
        children: [
          {
            path: '',
            element: <VideosRoute />
          },
          {
            path: 'store',
            element: <StoreRoute />
          }
        ]
      },

      {
        path: '*',
        element: <Navigate to={'/'} />
      }
    ]
  }
]);

const Popup = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={routerBrowser} />
    </React.StrictMode>
  );
};

export default withSuspense(Popup);
