import I18NextHttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import { formatDistanceStrict, isDate } from 'date-fns';
import { enUS, pl } from 'date-fns/locale';
import translationEn from '../../public/locales/en/translation.json';
import translationPl from '../../public/locales/pl/translation.json';

const locales = { en: enUS, pl };

const resources = {
  en: {
    translation: translationEn,
  },
  pl: {
    translation: translationPl,
  },
};

i18n
  .use(I18NextHttpBackend)
  .use(initReactI18next)
  .init({
    resources,
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
export { i18n };
