<div align="center">
<h1> YT Plugin<br/>React + Vite + TypeScript</h1>
<h2> Chrome Extension </h2>
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

#### When you're end part of work then before commit check folder in `src/instructions` and check if your code follow standards.

#### If you want to create something in utils, follow the folder structure described in `utils/instructions`.

### CONFIGURE PRETTIER IN YOUR IDE:

    PRETTIER IS IN .\node_modules\prettier

##### E.G. FOR WEBSTORM:

[Prettier config](https://blog.jetbrains.com/webstorm/2020/07/webstorm-2020-2/)

### CONFIGURE RELATIVE IMPORT PATHS IN YOUR IDE:

    IN WEBSTORM GO TO SETTING:
        EDITOR/CODE STYLE/TYPESCRIPT
            [X] USE PATHS RELATIVE TO TSCONFIG.JSON
         
        AND ALSO:
            [X] SORT IMPORTED BY MEMBERS
            [X] SORT IMPORTS BY MODULES 

### CONFIGURE RUNNING ESLINT AND PRETTIER TO RUN ON SAVE(MAKE SURE, YOU ALREADY HAVE AUTO-SAVE ENABLED):

    IN WEBSTORM GO TO SETTINGS:
       LANGUAGES & FRAMEWORKS/JAVASCRIPT/CODE QUALITY TOOLS/ESLINT:
         [X] RUN ESLINT --FIX ON SAVE 

      LANGUAGES & FRAMEWORKS/JAVASCRIPT/PRETTIER:
         [X] RUN ON SAVE

### CONFIGURE DEFAULT BRANCH UPDATE SETTINGS:

    IN WEBSTORM GO TO SETTING:
        GIT/PUSH:
            PROTECTED BRANCH: 'master;main"
        /UPDATE:
            UPDATE METHOD: 'rebase'
            CLEAN WORKING TREE USING: 'shelve'

###### ENJOY YOUR TASKS