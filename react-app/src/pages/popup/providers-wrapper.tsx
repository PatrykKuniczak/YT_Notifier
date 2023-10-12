import React from 'react';
import { ThemeProvider } from '@mui/system';
import darkTheme from '@pages/popup/data/themes/dark-theme';
import lightTheme from '@pages/popup/data/themes/light-theme';
import GlobalStyles from '@pages/popup/data/global-styles';
import { AuthContext } from '@root/utils/core/authentication/authentication';
import { RouterProvider } from 'react-router-dom';
import { IUser } from '@root/utils/interfaces/user.interface';
import { Router as RemixRouter } from '@remix-run/router/dist/router';

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
