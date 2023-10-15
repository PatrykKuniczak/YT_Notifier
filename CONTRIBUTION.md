## Installation <a name="installation"></a>
    1. Clone this repository.

## FOR ROOT(OVER APPS):
    RUN 'npm i' AND AFTER 'npm run prepare'

## FOR REACT-APP(FRONTED):

### Procedures <a name="procedures"></a>

1. Create `.env.local` in `envs` directory by copying `.env.example` and if necessary change to yours environment
   values.
2. Run `npm ci`

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

#### Remember in firefox you add plugin in temporary mode, that means it disappear after closing browser, on next launch you must do it again.

#### When you end part of work before committing check folder in `src/instructions` and check if your code follow standards.

#### If you want to create something in utils, follow the folder structure described in `utils/instructions`.

## FOR NEST-APP(BACKEND):

### Before Installation

    - Check postgresql v15 is installed on your machine, if not: 

[postgresql](https://www.postgresql.org/download/)

    - Check node v20.8.0 is installed on your machine, if not:

[node](https://nodejs.org/en/download)

    - If you don't have google account (You're strange :)) go and create one, then:

[set up google dev project](https://console.cloud.google.com/apis/credentials?hl=pl)

    - Set up project, name could be 'YT Plugin DEV'

    - Next follow this steps:

[set up credentials](https://developers.google.com/identity/protocols/oauth2/web-server?hl=pl#creatingcred)

    - Name could be like project
    - Authorize source JS is 'http://localhost:3001' (or other, if you change SERVER_PORT in env)
    - Redirect url is 'http://localhost:3001/api/auth/redirect' (port like above)

    - Go to /envs folder and copy 'example.env' then paste it as 'local.env',
      then paste your google credentials(clientId and secret) from google cloud console 
      or from secret.json(if you download file) to related env keys.

## Installation

```bash
$ npm ci
```

## Running the app

```bash
# development
$ npm run start

# watch mode *PREFERRED*
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Getting started

To run docs open in browser: https://localhost:3001/api/docs (or other port, if you change SERVER_PORT in env)
And there you can find next steps to authorize yourself, to have permission to use endpoints.
Follow the instructions from swagger description (On the top of the page)

## ON IDE FOR BOTH APPS(CONFIG ONLY FOR WEBSTORM)

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
         [X] AUTOMATIC ESLINT CONFIGURATION
         [X] RUN ESLINT --FIX ON SAVE 

      LANGUAGES & FRAMEWORKS/JAVASCRIPT/PRETTIER:
         [X] AUTOMATIC PRETTIER CONFIGURATION
         [X] RUN ON SAVE

### CONFIGURE IF YOU'RE USING WINDOWS:
      OPEN 'GIT BASH' ON YOUR MACHINE AS ADMINISTRATOR, AND PASTE IT:
         git config --global core.autocrlf false  - IF YOU WANT TO DISABLE IT FOR USER. (RECOMMENDED)
         git config --local core.autocrlf false  - IF YOU WANT TO DISABLE IT FOR THIS PROJECT ONLY.

### CONFIGURE DEFAULT BRANCH UPDATE SETTINGS:

    IN WEBSTORM GO TO SETTING:
        GIT/PUSH:
            PROTECTED BRANCH: 'master;main"
        /UPDATE:
            UPDATE METHOD: 'rebase'
            CLEAN WORKING TREE USING: 'shelve'

###### ENJOY YOUR TASKS