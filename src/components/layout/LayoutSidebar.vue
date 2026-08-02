<template>
    <VDashboardSidebar
        v-model:open="isOpen"
        collapsible
        resizable
        class="bg-elevated/25"
        :ui="{ footer: 'lg:border-t lg:border-default' }"
        :menu="{ side: 'right' }"
    >
        <template #header="{ collapsed }">
            <RouterLink
                :to="{ name: 'Dashboard' }"
                class="flex items-center gap-2 min-w-0"
            >
                <VAvatar :alt="adminName" icon="lucide:user" size="md"/>

                <span
                    v-if="collapsed === false"
                    class="font-semibold text-highlighted truncate"
                >
                    {{ adminName }}
                </span>
            </RouterLink>
        </template>

        <template #default="{ collapsed }">
            <VNavigationMenu
                :collapsed="collapsed"
                :items="items"
                orientation="vertical"
                tooltip
                popover
            />
        </template>

        <template #footer="{ collapsed }">
            <VNavigationMenu
                :collapsed="collapsed"
                :items="footerItems"
                orientation="vertical"
                tooltip
            />
        </template>
    </VDashboardSidebar>
</template>

<script setup lang="ts">
    // Vue
    import { ref, computed } from 'vue';
    import { useRouter } from 'vue-router';

    // Services
    import AuthService from '@/services/auth.service';
    import UserService from '@/services/user.service';
    import { t } from '@/services/language.service';

    // Types
    import type { NavigationMenuItem } from '@nuxt/ui';

    /**
     * ------------------------------------------------------------------------
     * Logic
     * ------------------------------------------------------------------------
     */

    const router = useRouter();

    const isOpen = ref<boolean>(false);

    const adminName = computed<string>(function () {
        const user = UserService.get();

        if (user === undefined) {
            return t('user_menu.admin');
        }

        return user.first_name + ' ' + user.last_name;
    });

    async function logout(): Promise<void> {
        AuthService.logout();
        await router.push({ name: 'Login' });
    }

    const items = computed<NavigationMenuItem[]>(() => [
        {
            label: t('nav.dashboard'),
            icon: 'lucide:house',
            to: { name: 'Dashboard' },
            exact: true
        }
    ]);

    const footerItems = computed<NavigationMenuItem[]>(() => [
        {
            label: t('user_menu.log_out'),
            icon: 'lucide:log-out',
            class: 'text-error',
            ui: {
                linkLeadingIcon: 'text-error'
            },
            onSelect: logout
        }
    ]);
</script>
