import * as fs from 'fs';
import * as path from 'path';
import * as process from 'process';
import url from 'url';
import type { PluginOption } from 'vite';
import colorLog from '../log';
import ManifestParser from '../manifest-parser';

const { resolve } = path;

const rootDir = resolve(__dirname, '../../..');
const distDir = resolve(rootDir, 'dist');
const manifestFile = resolve(rootDir, 'manifest.js');

const getManifestWithCacheBurst = (): Promise<{ default: chrome.runtime.ManifestV3 }> => {
  const withCacheBurst = (path: string) => `${path}?${Date.now().toString()}`;
  /**
   * In Windows, import() doesn't work without file:// protocol.
   * So, we need to convert path to file:// protocol. (url.pathToFileURL)
   */
  if (process.platform === 'win32') {
    return import(withCacheBurst(url.pathToFileURL(manifestFile).href));
  }
  return import(withCacheBurst(manifestFile));
};

export default function makeManifest(): PluginOption {
  function makeManifest(manifest: chrome.runtime.ManifestV3, to: string) {
    if (!fs.existsSync(to)) {
      fs.mkdirSync(to);
    }
    const manifestPath = resolve(to, 'manifest.json');

    fs.writeFileSync(manifestPath, ManifestParser.convertManifestToString(manifest));

    colorLog(`Manifest file copy complete: ${manifestPath}`, 'success');
  }

  return {
    name: 'make-manifest',
    buildStart() {
      this.addWatchFile(manifestFile);
    },
    async writeBundle() {
      const manifest = await getManifestWithCacheBurst();
      makeManifest(manifest.default, distDir);
    },
  };
}
