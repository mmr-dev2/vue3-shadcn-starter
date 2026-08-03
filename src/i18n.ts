import { createI18n as createVueI18N } from 'vue-i18n';

import en from '@/locales/en/index';
import fa from '@/locales/fa/index';

import type { Locale } from '@/types/locale';

const STORAGE_KEY = 'locale';
const DEFAULT: Locale = 'fa';

function getLocale(): Locale {
    const value = localStorage.getItem(STORAGE_KEY);

    if (value === null) {
        return DEFAULT;
    }

    return value as Locale;
}

const i18n = createVueI18N({
    locale: getLocale(),
    fallbackLocale: DEFAULT,
    messages: {
        en,
        fa
    }
});

export function createI18n() {
    return i18n;
}

export function t(key: string, ...args: unknown[]): string {
    return i18n.global.t(key, ...(args as []));
}
