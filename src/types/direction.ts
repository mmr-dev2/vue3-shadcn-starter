import type { Ref } from 'vue';

export type Direction = 'ltr' | 'rtl';

export interface UseDirection {
    direction: Ref<Direction>;
    setDirection: (direction: Direction) => void;
}
