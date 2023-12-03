import translationEn from '@root/public/locales/en/translation.json';
import translationPl from '@root/public/locales/pl/translation.json';
import { formatDistanceStrict, isDate } from 'date-fns';
import { enUS, pl } from 'date-fns/locale';
import i18n from 'i18next';
import I18NextHttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

const locales = { en: enUS, pl };
const plSuffixes = { 1: '', 1000: 'tys.', 1000000: 'mln', 1000000000: 'mld' };
const enSuffixes = { 1: '', 1000: 'K', 1000000: 'M', 1000000000: 'B' };

const parseViews = (value: number, suffixesArray: { [key: number]: string }) => {
  const createParsedString = (zerosAmount: number): string =>
    `${value.toString().slice(0, -zerosAmount)} ${suffixesArray[+`1e${zerosAmount}`]}`;

  if (value >= 1e9) {
    return createParsedString(9); // Billion
  } else if (value >= 1e6) {
    return createParsedString(6); // Million
  } else if (value >= 1e3) {
    return createParsedString(3); // Thousand
  } else {
    return value; // Less than thousand
  }
};

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
        if (format === 'ago' && isDate(value)) {
          return formatDistanceStrict(value, new Date(), {
            locale: locales[lng ?? 'en'],
            addSuffix: true,
          });
        } else if (format === 'abbreviations' && !isNaN(value)) {
          const currentSuffixesArray = lng === 'pl' ? plSuffixes : enSuffixes;
          return parseViews(value, currentSuffixesArray);
        }

        return value;
      },
    },
  });

export { i18n };
export { changeLanguage } from 'i18next';
export { useTranslation } from 'react-i18next';
