import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    Navigate,
    RouterProvider
} from 'react-router-dom';
import AuthPage from './pages/auth/auth.page.tsx';
import ProtectedPage from './pages/protected.page.tsx';
import HomePage from './pages/home/home.page.tsx';
import { VideosRoute } from './routes/videos.route.tsx';
import { StoreRoute } from './routes/store.route.tsx';

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
                        path: 'videos',
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
                element: <Navigate to={'/videos'} />
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={routerBrowser} />
    </React.StrictMode>
);
