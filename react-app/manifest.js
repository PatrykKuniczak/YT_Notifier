import { config } from 'dotenv';
import fs from 'node:fs';

const packageJson = JSON.parse(fs.readFileSync('../package.json', 'utf8'));

config({ path: 'envs/.env.local' });

/**
 * After changing, please reload the extension at `chrome://extensions`
 */
const manifest = {
  manifest_version: 3,
  default_locale: 'en',
  /**
   * if you want to support multiple languages, you can use the following reference
   * https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization
   */
  name: 'YT Notifier',
  version: packageJson.version,
  description: '__MSG_extensionDescription__',
  permissions: ['cookies', 'contextMenus', 'storage'],
  host_permissions: [`${process.env.VITE_API_URL}*`],
  options_page: 'src/pages/options/index.html',
  background: {
    service_worker: 'src/pages/background/index.js',
    type: 'module',
  },
  action: {
    default_popup: 'src/pages/popup/index.html',
    default_title: 'YT Notifier',
    default_icon: 'logo-32.png',
  },
  icons: {
    128: 'logo-128.png',
  },
  content_scripts: [
    {
      matches: ['<all_urls>'],
      exclude_matches: ['https://accounts.google.com/*'],
      js: ['src/pages/content/index.js'],
    },
  ],
  web_accessible_resources: [
    {
      resources: ['assets/js/*.js', 'assets/css/*.css', 'logo-128.png', 'logo-32.png'],
      matches: ['*://*/*'],
    },
  ],
};

export default manifest;
