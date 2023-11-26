import translationEn from '@root/public/locales/en/translation.json';
import translationPl from '@root/public/locales/pl/translation.json';
import { formatDistanceStrict, isDate } from 'date-fns';
import { enUS, pl } from 'date-fns/locale';
import i18n from 'i18next';
import I18NextHttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

const locales = { en: enUS, pl };

export const resources = {
  en: {
    translation: translationEn,
  },
  pl: {
    translation: translationPl,
  },
} as const;

i18n
  .use(I18NextHttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    defaultNS: 'translation',
    ns: ['translation'],
    resources,

    interpolation: {
      escapeValue: false,

      format: (value, format, lng) => {
        if (isDate(value)) {
          if (format === 'ago')
            return formatDistanceStrict(value, new Date(), {
              locale: locales[lng ?? 'en'],
              addSuffix: true,
            });
        }

        return value;
      },
    },
  });

export { i18n };
export { changeLanguage } from 'i18next';
export { useTranslation } from 'react-i18next';
