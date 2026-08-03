import type { Ref } from 'vue';

export type Theme = 'light' | 'dark' | 'auto';

export interface UseTheme {
    theme: Ref<Theme>;
    setTheme: (theme: Theme) => void;
}
