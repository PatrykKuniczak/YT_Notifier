<div align="center">
<h1> YT Plugin<br/>React + Vite + TypeScript</h1>
</div>

## Installation <a name="installation"></a>

### Procedures <a name="procedures"></a>

1. Clone this repository.
2. Create `.env.local` in `envs` directory by copying `.env.example` and if necessary change to yours environment
   values.
3. Run `npm ci`

## And next, depending on the needs:

### For chrome:

1. Run `npm run dev`
2. Open in browser - `chrome://extensions`
3. Check - `Developer mode`
4. Find and Click - `Load unpacked extension`
5. Select - `dist` folder (after dev or build)

#### If you want to build for production, Just run `npm run build`.

### For firefox:

1. Run `npm run dev:firefox`
2. Open in browser - `about:debugging#/runtime/this-firefox`
3. Find and Click - `Load Temporary Add-on...`
4. Select - `manifest.json` file from `dist` folder (after dev or build)

#### If you want to build for production, Just run `npm run build:firefox`.

#### Remember in firefox you add plugin in temporary mode, that's mean is disappear after close browser, you must do it again, on next launch.

#### When you end a part of work then before commit check folder in `src/instructions` and check if your code follow standards.