import packageJson from './package.json';

/**
 * After changing, please reload the extension at `chrome://extensions`
 */
const manifest: chrome.runtime.ManifestV3 = {
	manifest_version: 3,
	name: packageJson.name,
	version: packageJson.version,
	description: packageJson.description,
	permissions: ['cookies'],
	host_permissions: ['http://localhost:3001/api/*'],
	options_page: 'src/pages/options/index.html',
	background: {
		service_worker: 'src/pages/background/index.js',
		type: 'module',
	},
	action: {
		default_popup: 'src/pages/popup/index.html',
		default_title: 'YT Plugin',
		default_icon: 'icon-34.png',
	},
	icons: {
		'128': 'icon-128.png',
	},
	web_accessible_resources: [
		{
			resources: ['assets/js/*.js', 'assets/svg/*.svg', 'icon-128.png', 'icon-34.png'],
			matches: ['*://*/*'],
		},
	],
};

export default manifest;
