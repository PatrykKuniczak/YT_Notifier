<div>

<br/>
<p align="center">
    <img src="../react-app/public/logo-128.png" alt="Logo">
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
* [![NestJS][nestjs-shield]][nestjs-url]
* [Express Session](https://github.com/expressjs/session)
  with [Connect TypeORM](https://www.npmjs.com/package/connect-typeorm)
* [![Postgreqsql][postgresql-shield]][postgresql-url] v15, as ORM [TypeORM](https://typeorm.io/)
* [![Google][google-shield]][google-url] with oAuth2
* [![Swagger][swagger-shield]][swagger-url]
* [![Eslint][eslint-shield]][eslint-url]
* [Prettier](https://prettier.io)
* [Husky](https://typicode.github.io/husky)

## How it works

- Call google api via oAuth2 protocol and authorize user
- Set user session to expire after 7 days of inactivity
- Then user can manage theirs keywords (CRUD)
- Fetching videos (once per day), if user want to have data in the same day again, it's goes from cache
- If any fatal error(500) occurs then logs of this error are collecting in database, user can download it and attach to
  bug issue

## License

Distributed under the MIT License.
<br/>
See [LICENSE](https://github.com/PatrykKuniczak/YT_Search_Plugin/blob/main/LICENCE) for more information.

<!-- MARKDOWN LINKS & IMAGES -->

[npm-shield]: https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white

[npm-url]: https://www.npmjs.com/

[typescript-shield]: https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=typescript&logoColor=white

[typescript-url]: https://www.typescriptlang.org/

[postgresql-shield]:https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white

[postgresql-url]: https://www.postgresql.org/about/news/postgresql-15-released-2526/

[nestjs-shield]: https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white

[nestjs-url]: https://nestjs.com

[google-shield]: https://img.shields.io/badge/google-4285F4?style=for-the-badge&logo=google&logoColor=white

[google-url]: https://developers.google.com/identity/protocols/oauth2

[swagger-shield]: https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white

[swagger-url]: https://swagger.io/

[eslint-url]: https://eslint.org/

[eslint-shield]: https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white
