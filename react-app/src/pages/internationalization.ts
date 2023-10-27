import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import { formatDistanceStrict, isDate } from 'date-fns';
import { enUS, pl } from 'date-fns/locale';

const locales = { en: enUS, pl };

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        savedKeywords: 'Saved Keywords',
        foundVideos: 'Found Videos',
        search: 'Search',
        addKeyword: 'Add keyword',
        views: 'views',
        deleteAccount: 'Delete account',
        logout: 'Logout',
        languages: {
          pl: 'Polish',
          en: 'English',
        },
        timeAgo: '{{ date, ago }}',
      },
    },
    pl: {
      translation: {
        savedKeywords: 'Zapisane Frazy',
        foundVideos: 'Znalezione Wideo',
        search: 'Szukaj',
        addKeyword: 'Dodaj słowo kluczowe',
        views: 'wyświetleń',
        deleteAccount: 'Usuń konto',
        logout: 'Wyloguj się',
        languages: { pl: 'Polski', en: 'Angielski' },
        timeAgo: '{{ date, ago }}',
      },
    },
  },
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,

    format: (value, format, lng) => {
      if (isDate(value)) {
        if (format === 'ago')
          return formatDistanceStrict(value, new Date(), {
            locale: locales[lng],
            addSuffix: true,
          });
      }

      return value;
    },
  },
});
export default i18n;
