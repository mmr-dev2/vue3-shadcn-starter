<template>
    <VDashboardPanel :id="id">
        <template #header>
            <VDashboardNavbar>
                <template #leading>
                    <VDashboardSidebarCollapse/>
                </template>

                <template #title>
                    <slot name="title"/>
                </template>

                <template #right>
                    <VColorModeButton size="sm"/>

                    <slot name="actions"/>
                </template>
            </VDashboardNavbar>
        </template>

        <template #body>
            <slot/>
        </template>
    </VDashboardPanel>
</template>

<script setup lang="ts">
    const props = defineProps<{
        id: string
    }>();
</script>