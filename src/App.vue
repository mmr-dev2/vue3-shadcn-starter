<template>
    <RouterView />

    <Toaster/>
</template>

<script setup lang="ts">
    import 'vue-sonner/style.css';

    // Components
    import { Toaster } from '@/components/ui/sonner';
</script>
