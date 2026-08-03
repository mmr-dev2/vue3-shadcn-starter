<script setup lang="ts">
    import type { SidebarProps } from '@/components/ui/sidebar';

    import {
        AudioWaveform,
        BookOpen,
        Bot,
        Command,
        Frame,
        GalleryVerticalEnd,
        Map,
        PieChart,
        Settings2,
        SquareTerminal
    } from '@lucide/vue';
    import NavMain from '@/components/NavMain.vue';
    import NavProjects from '@/components/NavProjects.vue';
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
                title: t('sidebar.nav.playground.title'),
                url: '#',
                icon: SquareTerminal,
                isActive: true,
                items: [
                    {
                        title: t('sidebar.nav.playground.history'),
                        url: '#'
                    },
                    {
                        title: t('sidebar.nav.playground.starred'),
                        url: '#'
                    },
                    {
                        title: t('sidebar.nav.playground.settings'),
                        url: '#'
                    }
                ]
            },
            {
                title: t('sidebar.nav.models.title'),
                url: '#',
                icon: Bot,
                items: [
                    {
                        title: t('sidebar.nav.models.genesis'),
                        url: '#'
                    },
                    {
                        title: t('sidebar.nav.models.explorer'),
                        url: '#'
                    },
                    {
                        title: t('sidebar.nav.models.quantum'),
                        url: '#'
                    }
                ]
            },
            {
                title: t('sidebar.nav.documentation.title'),
                url: '#',
                icon: BookOpen,
                items: [
                    {
                        title: t('sidebar.nav.documentation.introduction'),
                        url: '#'
                    },
                    {
                        title: t('sidebar.nav.documentation.get_started'),
                        url: '#'
                    },
                    {
                        title: t('sidebar.nav.documentation.tutorials'),
                        url: '#'
                    },
                    {
                        title: t('sidebar.nav.documentation.changelog'),
                        url: '#'
                    }
                ]
            },
            {
                title: t('sidebar.nav.settings.title'),
                url: '#',
                icon: Settings2,
                items: [
                    {
                        title: t('sidebar.nav.settings.general'),
                        url: '#'
                    },
                    {
                        title: t('sidebar.nav.settings.team'),
                        url: '#'
                    },
                    {
                        title: t('sidebar.nav.settings.billing'),
                        url: '#'
                    },
                    {
                        title: t('sidebar.nav.settings.limits'),
                        url: '#'
                    }
                ]
            }
        ],
        projects: [
            {
                name: t('sidebar.projects.design_engineering'),
                url: '#',
                icon: Frame
            },
            {
                name: t('sidebar.projects.sales_marketing'),
                url: '#',
                icon: PieChart
            },
            {
                name: t('sidebar.projects.travel'),
                url: '#',
                icon: Map
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
            <NavProjects :projects="data.projects" />
        </SidebarContent>
        <SidebarFooter>
            <NavUser :user="data.user" />
        </SidebarFooter>
        <SidebarRail />
    </Sidebar>
</template>
