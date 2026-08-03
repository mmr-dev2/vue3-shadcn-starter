import type { Ref } from 'vue';

// Types
import type { Font } from '@/types/font';
import type { Direction } from '@/types/direction';

export type Locale = 'fa' | 'en';

export interface LocaleConfig {
    direction: Direction;
    font: Font;
}

export interface UseLocale {
    locale: Ref<Locale>;
    setLocale: (locale: Locale) => void;
}
