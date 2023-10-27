import urls from '@utils/endpoints/urls';
import reloadOnUpdate from 'virtual:reload-on-update-in-background-script';
import CreateProperties = chrome.contextMenus.CreateProperties;

reloadOnUpdate('pages/background');

const createProperties: CreateProperties = {
  id: 'acae3286',
  title: `Subscribe '%s' keyword`,
  contexts: ['selection'],
};

chrome.contextMenus.create(createProperties, () => console.log('Context menu created!'));

chrome.contextMenus.onClicked.addListener(({ selectionText }) => {
  if (selectionText.length > 255) {
    //TODO: show error message
    return;
  }

  fetch(`${import.meta.env.VITE_API_URL}${urls.keyWords}`, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({ content: selectionText }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(r => r.json())
    .then(r => console.log(r))
    .catch(err => console.log(err));

  //TODO: show success or error message

  console.log('Context menu clicked!', selectionText);
});
