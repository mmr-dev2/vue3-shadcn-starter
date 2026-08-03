// Vue
import { watchEffect } from 'vue';

// Vueuse
import { createSharedComposable, useStorage } from '@vueuse/core';

// Types
import type { Font, UseFont } from '@/types/font';

const STORAGE_KEY = 'font';
const DEFAULT: Font = 'dana';

function initialize(): Font {
    return document.documentElement.dataset.font === 'inter' ? 'inter' : DEFAULT;
}

export const useFont = createSharedComposable((): UseFont => {
    const font = useStorage<Font>(STORAGE_KEY, initialize());

    watchEffect(() => {
        document.documentElement.dataset.font = font.value;
    });

    function setFont(value: Font): void {
        font.value = value;
    }

    return {
        font,
        setFont
    };
});
