// Vue
import { watchEffect } from 'vue';

// Vueuse
import { createSharedComposable, useStorage } from '@vueuse/core';

// Types
import type { Direction, UseDirection } from '@/types/direction';

const STORAGE_KEY = 'direction';
const DEFAULT: Direction = 'rtl';

function initialize(): Direction {
    return document.documentElement.dir === 'ltr' ? 'ltr' : DEFAULT;
}

export const useDirection = createSharedComposable((): UseDirection => {
    const direction = useStorage<Direction>(STORAGE_KEY, initialize());

    watchEffect(() => {
        document.documentElement.dir = direction.value;
    });

    function setDirection(value: Direction): void {
        direction.value = value;
    }

    return {
        direction,
        setDirection
    };
});
