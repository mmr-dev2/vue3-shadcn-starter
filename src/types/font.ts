import type { Ref } from 'vue';

export type Font = 'dana' | 'inter';

export interface UseFont {
    font: Ref<Font>;
    setFont: (font: Font) => void;
}
