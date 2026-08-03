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
    import { useFont } from '@/composables/useFont';
    import { useDirection } from '@/composables/useDirection';

    useTheme();
    useFont();
    useDirection();
</script>
