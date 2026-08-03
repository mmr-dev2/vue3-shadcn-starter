// Vue
import { watchEffect } from 'vue';

// Vueuse
import { createSharedComposable, useStorage } from '@vueuse/core';

// Composables
import { useFont } from '@/composables/useFont';
import { useDirection } from '@/composables/useDirection';

// Config
import { LOCALES } from '@/config/locale';

// Types
import type { Locale, UseLocale } from '@/types/locale';

const STORAGE_KEY = 'locale';
const DEFAULT: Locale = 'fa';

function initialize(): Locale {
    return document.documentElement.lang === 'en' ? 'en' : DEFAULT;
}

export const useLocale = createSharedComposable((): UseLocale => {
    const locale = useStorage<Locale>(STORAGE_KEY, initialize());

    const { setFont } = useFont();
    const { setDirection } = useDirection();

    watchEffect(() => {
        const { font, direction } = LOCALES[locale.value];

        document.documentElement.lang = locale.value;
        setFont(font);
        setDirection(direction);
    });

    function setLocale(value: Locale): void {
        locale.value = value;
        location.reload();
    }

    return {
        locale,
        setLocale
    };
});
