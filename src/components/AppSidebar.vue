<script setup lang="ts">
    import type { SidebarProps } from '@/components/ui/sidebar';

    import {
        AudioWaveform,
        Command,
        GalleryVerticalEnd,
        LayoutDashboard,
        ListTodo,
        Newspaper,
        ShoppingBag,
        Users
    } from '@lucide/vue';
    import NavMain from '@/components/NavMain.vue';
    import NavUser from '@/components/NavUser.vue';
    import TeamSwitcher from '@/components/TeamSwitcher.vue';
    import { t } from '@/i18n';

    import {
        Sidebar,
        SidebarContent,
        SidebarFooter,
        SidebarHeader,
        SidebarRail
    } from '@/components/ui/sidebar';

    const props = withDefaults(defineProps<SidebarProps>(), {
        collapsible: 'icon'
    });

    // This is sample data.
    const data = {
        user: {
            name: 'shadcn',
            email: 'm@example.com',
            avatar: '/avatars/shadcn.jpg'
        },
        teams: [
            {
                name: 'Acme Inc',
                logo: GalleryVerticalEnd,
                plan: t('sidebar.team_plan.enterprise')
            },
            {
                name: 'Acme Corp.',
                logo: AudioWaveform,
                plan: t('sidebar.team_plan.startup')
            },
            {
                name: 'Evil Corp.',
                logo: Command,
                plan: t('sidebar.team_plan.free')
            }
        ],
        navMain: [
            {
                title: t('sidebar.nav.dashboard.title'),
                url: '/',
                icon: LayoutDashboard
            },
            {
                title: t('sidebar.nav.users.title'),
                url: '#',
                icon: Users,
                isActive: true,
                items: [
                    {
                        title: t('sidebar.nav.users.all'),
                        url: '#'
                    },
                    {
                        title: t('sidebar.nav.users.add'),
                        url: '#'
                    }
                ]
            },
            {
                title: t('sidebar.nav.todos.title'),
                url: '#',
                icon: ListTodo,
                isActive: true,
                items: [
                    {
                        title: t('sidebar.nav.todos.all'),
                        url: '#'
                    },
                    {
                        title: t('sidebar.nav.todos.add'),
                        url: '#'
                    }
                ]
            },
            {
                title: t('sidebar.nav.products.title'),
                url: '#',
                icon: ShoppingBag,
                isActive: true,
                items: [
                    {
                        title: t('sidebar.nav.products.all'),
                        url: '#'
                    },
                    {
                        title: t('sidebar.nav.products.categories'),
                        url: '#'
                    },
                    {
                        title: t('sidebar.nav.products.add'),
                        url: '#'
                    }
                ]
            },
            {
                title: t('sidebar.nav.posts.title'),
                url: '#',
                icon: Newspaper,
                isActive: true,
                items: [
                    {
                        title: t('sidebar.nav.posts.all'),
                        url: '#'
                    },
                    {
                        title: t('sidebar.nav.posts.tags'),
                        url: '#'
                    },
                    {
                        title: t('sidebar.nav.posts.add'),
                        url: '#'
                    }
                ]
            }
        ]
    };
</script>

<template>
    <Sidebar v-bind="props">
        <SidebarHeader>
            <TeamSwitcher :teams="data.teams" />
        </SidebarHeader>
        <SidebarContent>
            <NavMain :items="data.navMain" />
        </SidebarContent>
        <SidebarFooter>
            <NavUser :user="data.user" />
        </SidebarFooter>
        <SidebarRail />
    </Sidebar>
</template>
