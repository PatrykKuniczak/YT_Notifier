<div>
  <a href="https://github.com/github_username/repo_name">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h2 align="center">YT Notifier</h2>
</div>

<br/>

<h3>Table of Contents</h3>
  <ol>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#licence">Licence</a></li>
  </ol>

## Built With

* [![Typescript][typescript-shield]][typescript-url]
* [![NestJS][nestjs-shield]][nestjs-url] with default([![express][expressjs-shield]][expressjs-url]) core
* [Express Session](https://github.com/expressjs/session)
  with [Connect TypeORM](https://www.npmjs.com/package/connect-typeorm)
* [![Postgreqsql][postgresql-shield]][postgresql-url] v15, as ORM [TypeORM](https://typeorm.io/)
* [![Google][google-shield]][google-url] with oAuth2
* [![Swagger][swagger-shield]][swagger-url]
* [![Eslint][eslint-shield]][eslint-url]
* [Prettier](https://prettier.io)
* [Husky](https://typicode.github.io/husky)

## Roadmap

- Call google api via oAuth2 protocol and authorize user
- User session is expiring after 7 days of inactivity
- Then user can manage them keywords (CRUD)
- Get videos (once per day), if user want to have data in the same day again, it's goes from cache
- If any fatal error(500) occurs then logs of this error is collecting in DB, user can download it and attach to bug
  issue

## License

Distributed under the MIT License.
<br/>
See [LICENSE](https://github.com/PatrykKuniczak/YT_Search_Plugin/blob/main/LICENCE) for more information.

<!-- MARKDOWN LINKS & IMAGES -->

[typescript-shield]: https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=typescript&logoColor=white

[typescript-url]: https://www.typescriptlang.org/

[postgresql-shield]:https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white

[postgresql-url]: https://www.postgresql.org/about/news/postgresql-15-released-2526/

[nestjs-shield]: https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white

[nestjs-url]: https://nestjs.com

[expressjs-shield]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB

[expressjs-url]: https://expressjs.com

[google-shield]: https://img.shields.io/badge/google-4285F4?style=for-the-badge&logo=google&logoColor=white

[google-url]: https://developers.google.com/identity/protocols/oauth2

[swagger-shield]: https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white

[swagger-url]: https://swagger.io/

[eslint-url]: https://eslint.org/

[eslint-shield]: https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white
