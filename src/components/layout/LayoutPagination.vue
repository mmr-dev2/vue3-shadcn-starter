<template>
    <div class="flex items-center justify-between gap-3 border-t border-default pt-4 mt-auto">
        <div class="text-sm text-muted">
            {{ $t('admin.table.total', { count: total }) }}
        </div>

        <VPagination
            :page="page"
            :items-per-page="perPage"
            :total="total"
            show-edges
            :sibling-count="1"
            variant="link"
            @update:page="goToPage"
        />
    </div>
</template>

<script setup lang="ts">
    // Vue
    import { computed } from 'vue';
    import { useRoute, useRouter } from 'vue-router';

    // Types
    import type { LocationQueryRaw } from 'vue-router';

    /**
     * ------------------------------------------------------------------------
     * Logic
     * ------------------------------------------------------------------------
     */

    const props = withDefaults(defineProps<{
        total: number,
        perPage?: number
    }>(), {
        perPage: 10
    });

    const route = useRoute();
    const router = useRouter();

    const page = computed<number>(function () {
        const rawOffset = route.query.offset;

        if (typeof rawOffset !== 'string') {
            return 1;
        }

        const offset = Number(rawOffset);

        if (Number.isNaN(offset)) {
            return 1;
        }

        return Math.floor(offset / props.perPage) + 1;
    });

    async function goToPage(newPage: number) {
        const offset = (newPage - 1) * props.perPage;

        const query: Record<string, unknown> = {
            ...route.query,
            offset: String(offset),
            count: String(props.perPage)
        };

        await router.replace({ query: query as LocationQueryRaw });
    }
</script>