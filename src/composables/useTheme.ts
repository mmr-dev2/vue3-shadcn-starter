// Vueuse
import { createSharedComposable, useColorMode } from '@vueuse/core';

// Types
import type { Theme, UseTheme } from '@/types/theme';

export const useTheme = createSharedComposable((): UseTheme => {
    const mode = useColorMode<Theme>({
        attribute: 'class',
        modes: {
            light: 'light',
            dark: 'dark'
        },
        emitAuto: true
    });

    function setTheme(theme: Theme): void {
        mode.value = theme;
    }

    return {
        theme: mode,
        setTheme
    };
});
