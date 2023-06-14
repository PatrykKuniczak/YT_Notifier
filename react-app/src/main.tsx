import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.tsx';
import {
    createBrowserRouter,
    Navigate,
    RouterProvider
} from 'react-router-dom';
import { VideosRoute } from './routes/videos.route.tsx';

const routerBrowser = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <VideosRoute />
            }
        ]
    },
    {
        path: '*',
        element: <Navigate to={'/'} />
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={routerBrowser} />
    </React.StrictMode>
);
