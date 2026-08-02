<template>
    <VDashboardGroup unit="rem">
        <LayoutSidebar/>

        <RouterView/>
    </VDashboardGroup>
</template>

<script setup lang="ts">
    // Components
    import LayoutSidebar from '@/components/layout/LayoutSidebar.vue';
</script>