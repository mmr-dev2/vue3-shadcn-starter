<template>
    <SidebarProvider>
        <AppSidebar />

        <SidebarInset>
            <header class="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                <SidebarTrigger class="-ms-2" />
                <Separator orientation="vertical" class="me-2 h-4" />

                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem class="hidden md:block">
                            <BreadcrumbLink href="#">
                                {{ $t('app.breadcrumb.building_your_application') }}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator class="hidden md:block" />
                        <BreadcrumbItem>
                            <BreadcrumbPage>{{ $t('app.breadcrumb.data_fetching') }}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </header>

            <div class="flex flex-1 flex-col gap-4 p-4">
                <RouterView />
            </div>
        </SidebarInset>
    </SidebarProvider>
</template>

<script setup lang="ts">
    import AppSidebar from '@/components/AppSidebar.vue';
    import { Separator } from '@/components/ui/separator';
    import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
    import {
        Breadcrumb,
        BreadcrumbList,
        BreadcrumbItem,
        BreadcrumbLink,
        BreadcrumbPage,
        BreadcrumbSeparator
    } from '@/components/ui/breadcrumb';
</script>
