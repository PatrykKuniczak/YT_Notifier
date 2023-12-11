[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<br />
<div>
<p align="center">
    <img src="react-app/public/logo-128.png" alt="Logo">
</p>

<h2 align="center">YT Notifier</h2>

  <p align="center">
    Chrome extension which inform you about recently uploaded videos to youtube, 
    only from keywords/titles which you want to.
    <br/>
    <br/>
    You can 'subscribe' a word, and get only videos, which title contain this word. 
  </p>
</div>

<br/>

<h3>Table of Contents</h3>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>

## About The Project

### Features:

#### Auth:

- Login with google account
  <br/>
  ![Auth Page Screen Shot][auth-page-screenshot]
  <br/>
  <br/>

#### Videos:

- Adding, Editing, Deleting and Searching keywords/titles (from which videos was found)
- Videos is interactive, you can easly add it to your watch later or open in new tab.
  <br/>
  ![Videos Screen Shot][videos-screenshot]
  <br/>
  <br/>
- For open watch later, click the same icon on navbar
- Once per day you will receive a notification about found videos, if something new was released.
  <br/>
  ![Notification Screen Shot][notification-screenshot]
  <br/>
  <br/>

#### Rest Features:

- Theme switching (light/dark)
- Changing language
- Link (icon) on left bottom corner redirecting to github issues, where you can contact with us
- You have option to collect info about errors, when you want to submit bug issue, you can download and attach this
  data, which help us to solve issue quickly
- Loading and error events handling for better experience

### Built With

* [![NPM][npm-shield]][npm-url]
* [![Typescript][typescript-shield]][typescript-url]
* [![NestJS][nestjs-shield]][nestjs-url]
  [Backend README](https://github.com/PatrykKuniczak/YT_Search_Plugin/blob/main/nest-app/README.md)
* [![React][react-shield]][react-url]
  [Frontend README](https://github.com/PatrykKuniczak/YT_Search_Plugin/blob/main/react-app/README.md)

## Contributing

For contribute, visit: [CONTRIBUTION](https://github.com/PatrykKuniczak/YT_Search_Plugin/blob/main/CONTRIBUTION.md)

## License

Distributed under the MIT License.
<br/>
See [LICENSE](https://github.com/PatrykKuniczak/YT_Search_Plugin/blob/main/LICENCE) for more information.

## Contact

Feel free to open [Issue](https://github.com/PatrykKuniczak/YT_Search_Plugin/issues)

<!-- MARKDOWN LINKS & IMAGES -->

[npm-shield]: https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white

[npm-url]: https://www.npmjs.com/

[typescript-shield]: https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=typescript&logoColor=white

[typescript-url]: https://www.typescriptlang.org/

[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg

[license-url]: https://github.com/PatrykKuniczak/YT_Search_Plugin/blob/main/LICENCE

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555

[linkedin-url]: https://www.linkedin.com/in/patryk-kuniczak-61b416238

[react-shield]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB

[react-url]: https://react.dev/

[nestjs-shield]: https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white

[nestjs-url]: https://nestjs.com

[auth-page-screenshot]: screenshots/auth-page.png

[keywords-screenshot]: screenshots/keywords.png

[videos-screenshot]: screenshots/videos.png

[notification-screenshot]: screenshots/notification.png
