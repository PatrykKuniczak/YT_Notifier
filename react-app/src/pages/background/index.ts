import urls from '@utils/endpoints/urls';
import reloadOnUpdate from 'virtual:reload-on-update-in-background-script';
import { toast } from 'react-toastify';
import { useTranslation } from '@internationalization';
import CreateProperties = chrome.contextMenus.CreateProperties;

reloadOnUpdate('pages/background');

const createProperties: CreateProperties = {
  id: 'acae3286',
  title: `Subscribe '%s' keyword`,
  contexts: ['selection'],
};

chrome.contextMenus.create(createProperties);

chrome.contextMenus.onClicked.addListener(({ selectionText }) => {
  const { t } = useTranslation();

  if ((selectionText ?? '').length > 255) {
    toast.error(t('validation'), {
      toastId: 'validation',
    });
  }

  fetch(`${import.meta.env.VITE_API_URL}${urls.keyWords}`, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({ content: selectionText }),
  })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => {
      if (err.response.status === 401) {
        toast.error(t('unauthorized'));
      } else {
        toast.error(t('fallbackError'));
      }
    });
});

let stopFetching = false;

chrome.runtime.onMessage.addListener(({ shouldFetch }) => {
  if (!shouldFetch) {
    stopFetching = true;
    chrome.tabs.query({}, tabs => {
      tabs.forEach(tab => {
        chrome.tabs.sendMessage(tab.id!, { closeNotification: true });
      });
    });
  }

  if (shouldFetch && !stopFetching) {
    fetch(`${import.meta.env.VITE_API_URL}${urls.ytVideos.getVideos}`, {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(res => {
        chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
          const activeTab = tabs[0];
          chrome.tabs.sendMessage(activeTab.id!, {
            loadedVideosAmount: res.cause ? 0 : res.length,
            videosFetchingError: res.cause,
          });
        });
      });
  }
});
