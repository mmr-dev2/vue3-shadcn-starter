<template>
    <VApp :dir="dir">
        <RouterView/>
    </VApp>
</template>

<script setup lang="ts">
    // Services
    import LanguageService from '@/services/language.service';

    const dir = LanguageService.isRtl() ? 'rtl' : 'ltr';
</script>
