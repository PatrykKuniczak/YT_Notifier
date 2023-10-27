import I18NextHttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import { formatDistanceStrict, isDate } from 'date-fns';
import { enUS, pl } from 'date-fns/locale';

const locales = { en: enUS, pl };

i18n
  .use(I18NextHttpBackend)
  .use(initReactI18next)
  .init({
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
