import { IErrorWithCause } from '@interfaces';
import { i18n, t } from '@internationalization';
import urls from '@utils/endpoints/urls';
import reloadOnUpdate from 'virtual:reload-on-update-in-background-script';
import CreateProperties = chrome.contextMenus.CreateProperties;

reloadOnUpdate('pages/background');

i18n.changeLanguage(navigator.language);

const sendQueryToActiveTab = (message: { [key: string]: unknown }) => {
  chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
    const activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id!, message).catch(() => {
      // THIS IS BECAUSE SOME PAGES DON'T ALLOW CONTENT SCRIPT OR IF ISN'T LOADED YET, THEN ERROR HAPPENED
    });
  });
};

chrome.runtime.onInstalled.addListener(() => {
  const createProperties: CreateProperties = {
    id: 'acae3286',
    title: `${t('subscribe')} '%s'`,
    contexts: ['selection'],
  };

  chrome.contextMenus.create(createProperties);
});

chrome.contextMenus.onClicked.addListener(({ selectionText }) => {
  if ((selectionText ?? '').length >= 3 && (selectionText ?? '').length <= 255) {
    fetch(`${import.meta.env.VITE_API_URL}${urls.keyWords}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: selectionText }),
    })
      .then(async res => {
        if (res.status !== 201) {
          const jsonRes = await res.json();

          sendQueryToActiveTab({ contentMenuErrorCause: jsonRes.cause });
        } else {
          sendQueryToActiveTab({ contentMenuSuccess: true });
        }
      })
      .catch((err: IErrorWithCause) => {
        sendQueryToActiveTab({ contentMenuErrorCause: err.response.data.cause });
      });
  } else {
    sendQueryToActiveTab({ contentMenuValidationError: true });
  }
});

let stopFetching = false;

chrome.runtime.onMessage.addListener(({ shouldFetch }) => {
  if (!shouldFetch) {
    stopFetching = true;
    chrome.tabs.query({}, tabs => {
      tabs.forEach(tab => {
        chrome.tabs.sendMessage(tab.id!, { closeNotification: true }).catch(() => {
          // THIS IS BECAUSE SOME PAGES DON'T ALLOW CONTENT SCRIPT OR IF ISN'T LOADED YET, THEN ERROR HAPPENED
        });
      });
    });
  }

  if (shouldFetch && !stopFetching) {
    fetch(`${import.meta.env.VITE_API_URL}${urls.ytVideos.getVideos}`, {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(res => {
        sendQueryToActiveTab({
          loadedVideosAmount: res.cause ? 0 : res.length,
          videosFetchingError: res.cause,
        });
      });
  }
});
