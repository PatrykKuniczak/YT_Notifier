import packageJson from '../package.json' assert { type: 'json' };

/**
 * After changing, please reload the extension at `chrome://extensions`
 */
const manifest = {
  manifest_version: 3,
  name: packageJson.name,
  version: packageJson.version,
  description: packageJson.description,
  permissions: ['cookies', 'contextMenus'],
  host_permissions: ['http://localhost:3001/api/*'],
  options_page: 'src/pages/options/index.html',
  background: {
    service_worker: 'src/pages/background/index.js',
    type: 'module',
  },
  action: {
    default_popup: 'src/pages/popup/index.html',
    default_title: 'YT Plugin',
    default_icon: 'icon-32.png',
  },
  icons: {
    128: 'icon-128.png',
  },
  content_scripts: [
    {
      matches: ['<all_urls>'],
      js: ['src/pages/content/index.js'],
    },
  ],
  web_accessible_resources: [
    {
      resources: ['assets/js/*.js', 'assets/css/*.css', 'icon-128.png', 'icon-32.png'],
      matches: ['*://*/*'],
    },
  ],
};

export default manifest;
