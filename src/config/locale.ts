import type { Locale, LocaleConfig } from '@/types/locale';

export const LOCALES: Record<Locale, LocaleConfig> = {
    fa: {
        direction: 'rtl',
        font: 'dana'
    },
    en: {
        direction: 'ltr',
        font: 'inter'
    }
};
