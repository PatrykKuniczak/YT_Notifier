import Popup from '@pages/popup/Popup';
import queryClient, { QueryClientProvider } from '@query-client';
import React from 'react';
import { createRoot } from 'react-dom/client';
import refreshOnUpdate from 'virtual:reload-on-update-in-view';

refreshOnUpdate('pages/popup');

function init() {
  const appContainer = document.querySelector('#app-container');
  if (!appContainer) {
    throw new Error('Can not find #app-container');
  }

  const root = createRoot(appContainer);
  root.render(
    <QueryClientProvider client={queryClient}>
      <Popup />
    </QueryClientProvider>,
  );
}

init();
