<div>

<br/>
<p align="center">
    <img src="public/logo-128.png" alt="Logo">
</p>

<h2 align="center">YT Notifier</h2>
</div>

<br/>

<h3>Table of Contents</h3>
  <ol>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#how-it-works">How it works</a></li>
    <li><a href="#licence">Licence</a></li>
  </ol>

## Built With

* [![NPM][npm-shield]][npm-url]
* [![Typescript][typescript-shield]][typescript-url]
* [![React][react-shield]][react-url]
* [![React-Query][react-query-shield]][react-query-url]
* [![MUI][mui-shield]][mui-url] with [![Styled components][styled-components-shield]][styled-components-url]
* [i18n](https://www.i18next.com/)
* [Axios](https://axios-http.com/)
* [Prettier](https://prettier.io)
* [Husky](https://typicode.github.io/husky)

- Loadings components are created with [React Loading Skeleton](https://www.npmjs.com/package/react-loading-skeleton),
  except main spinner, that was created with [React Spinners](https://www.davidhu.io/react-spinners/)

## How it works

- Authentication is completely handled on the backend.
  Here only a cookie is grabbed and a request is sent for user data.
  For more information on authentication, please visit
  the [Backend README](https://github.com/PatrykKuniczak/YT_Search_Plugin/blob/main/nest-app/README.md).
- Auth credentials are available via react context api
- Users are redirected to the home page using [React Router Dom](https://reactrouter.com/en/main)
- Can manage keywords and interact with fetched videos
- Once per day have custom toast notification, it was built on react-toastify

## License

Distributed under the MIT License.
<br/>
See [LICENSE](https://github.com/PatrykKuniczak/YT_Search_Plugin/blob/main/LICENCE) for more information.

<!-- MARKDOWN LINKS & IMAGES -->

[npm-shield]: https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white

[npm-url]: https://www.npmjs.com/

[typescript-shield]: https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=typescript&logoColor=white

[typescript-url]: https://www.typescriptlang.org/

[react-shield]: https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB

[react-url]: https://react.dev/

[react-query-shield]: https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white

[react-query-url]: https://tanstack.com/query/v3/

[mui-shield]: https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white

[mui-url]: https://mui.com/

[styled-components-shield]: https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white

[styled-components-url]: https://styled-components.com/docs/basics

[eslint-url]: https://eslint.org/

[eslint-shield]: https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white
