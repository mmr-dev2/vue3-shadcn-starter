<template>
    <RouterView />

    <Toaster />
</template>

<script setup lang="ts">
    import 'vue-sonner/style.css';

    // Components
    import { Toaster } from '@/components/ui/sonner';

    // Composables
    import { useTheme } from '@/composables/useTheme';
    import { useLocale } from '@/composables/useLocale';

    useTheme();
    useLocale();
</script>
