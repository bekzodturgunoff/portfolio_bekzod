import en from './en';
import ko from './ko';
import ru from './ru';
import type { I18n } from './types';

export const languages = {
  en: 'English',
  ko: '한국어',
  ru: 'Русский',
};

export const defaultLang = 'en';

const dictionaries: Record<string, I18n> = {
  en,
  ko,
  ru,
};

export function getDictionary(lang: string): I18n {
  return dictionaries[lang] ?? dictionaries[defaultLang];
}

export type { I18n };

