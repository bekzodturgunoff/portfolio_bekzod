import type { I18n, Locale } from './types';
import en from './en';
import ru from './ru';
import ko from './ko';

const dictionaries: Record<Locale, I18n> = { en, ru, ko };

export function getDictionary(locale: Locale = 'en'): I18n {
  return dictionaries[locale] ?? en;
}

export type { I18n, Locale };
