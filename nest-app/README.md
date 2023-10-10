## Before Installation

    - Check postgresql v15 is installed on your machine, if not: 

[postgresql](https://www.postgresql.org/download/)

    - Check node v20.8.0 is installed on your machine, if not:

[node](https://nodejs.org/en/download)

    - If you don't have google account (You're strange :)), anyway go and create one, then:

[set up google dev project](https://console.cloud.google.com/apis/credentials?hl=pl)

    - Set up project, name could be 'YT Plugin DEV'

    - Next follow this steps:

[set up credentials](https://developers.google.com/identity/protocols/oauth2/web-server?hl=pl#creatingcred)

    - Name could be like project
    - Authorize source JS is 'http://localhost:3001' (or other, if you change SERVER_PORT in env)
    - Redirect url is 'http://localhost:3001/api/auth/redirect' (port like above)

    - Go to /envs folder and copy 'example.env' then paste it as 'local.env', then paste your google credentials,
    clientId and secret from secret.json from dev console to related env keys (You can copy it directly from browser).

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

For run docs go to https://localhost:3001/api/docs (or other, if you change SERVER_PORT in env)
And there you can find next steps to authorize yourself, to have permission to use endpoints,
follow the instructions from swagger description (On the top of the page)
