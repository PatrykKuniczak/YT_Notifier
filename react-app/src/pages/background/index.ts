import { IErrorWithCause } from '@interfaces';
import { i18n, t } from '@internationalization';
import urls from '@utils/endpoints/urls';
import reloadOnUpdate from 'virtual:reload-on-update-in-background-script';
import CreateProperties = chrome.contextMenus.CreateProperties;

reloadOnUpdate('pages/background');

i18n.changeLanguage(navigator.language);

const createProperties: CreateProperties = {
  id: 'acae3286',
  title: `${t('subscribe')} '%s'`,
  contexts: ['selection'],
};

chrome.contextMenus.create(createProperties);

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

          chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
            const activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id!, { contentMenuErrorCause: jsonRes.cause });
          });
        } else {
          chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
            const activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id!, { contentMenuSuccess: true });
          });
        }
      })
      .catch((err: IErrorWithCause) => {
        chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
          const activeTab = tabs[0];
          chrome.tabs.sendMessage(activeTab.id!, { contentMenuErrorCause: err.response.data.cause });
        });
      });
  } else {
    chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
      const activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id!, { contentMenuValidationError: true });
    });
  }
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
