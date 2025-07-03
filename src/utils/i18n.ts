import en from '../locales/en.json';
import de from '../locales/de.json';

export type Locale = 'en' | 'de';

const translations = {
  en,
  de,
};

export function getLocaleFromHost(host: string): Locale {
  if (host.includes('.de')) {
    return 'de';
  }
  return 'en';
}

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.en;
}

export function t(locale: Locale, key: string): string {
  const keys = key.split('.');
  let value: unknown = translations[locale] || translations.en;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      return key; // Return key if translation not found
    }
  }
  
  return typeof value === 'string' ? value : key;
} 