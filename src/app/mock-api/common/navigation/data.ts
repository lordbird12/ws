/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';
import { AuthService } from 'app/core/auth/auth.service';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        title: 'ผู้ดูแลระบบ',
        subtitle: 'เมนูหลักการใช้งานสำหรับผู้ดูแลระบบ',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [
            // {
            //     title: 'จัดการหน้าเว็บเพจ',
            //     type: 'basic',
            //     icon: 'heroicons_outline:globe-alt',
            //     link: '/website/list',
            // },
            {
                title: 'เมนูหลัก',
                type: 'basic',
                icon: 'heroicons_outline:menu',
                link: '/menus/list',
            },
            {
                title: 'ภาพแบนเนอร์สไลด์',
                type: 'basic',
                icon: 'heroicons_outline:fast-forward',
                link: '/banner/list',
            },
            {
                title: 'หมวดหมู่สินค้าหลัก',
                type: 'basic',
                icon: 'heroicons_outline:cube',
                link: '/product-category/list',
            },
            {
                title: 'สินค้าหลัก',
                type: 'basic',
                icon: 'heroicons_outline:cube',
                link: '/product-main/list',
            },
            {
                title: 'สินค้าทั้งหมด',
                type: 'basic',
                icon: 'heroicons_outline:cube',
                link: '/product/list',
            },
            {
                title: 'วีดีโอยูทูบ',
                type: 'basic',
                icon: 'heroicons_outline:play',
                link: '/youtube/list',
            },
            {
                title: 'วีดีโอยูทูบสินค้าขายดี',
                type: 'basic',
                icon: 'heroicons_outline:play',
                link: '/youtube-best/list',
            },
            {
                title: 'วีดีโอยูทูบเดี่ยว',
                type: 'basic',
                icon: 'heroicons_outline:play',
                link: '/video/list',
            },
            {
                title: 'ภาพแบนเนอร์เดียว',
                type: 'basic',
                icon: 'heroicons_outline:video-camera',
                link: '/single-banner/list',
            },
            {
                title: 'อัลบั้มรูปภาพ',
                type: 'basic',
                icon: 'heroicons_outline:video-camera',
                link: '/gallery/list',
            },
            {
                title: 'รีวิว',
                type: 'basic',
                icon: 'heroicons_outline:eye',
                link: '/review/list',
            },
            {
                title: 'ปุ่มติดต่อไลน์',
                type: 'basic',
                icon: 'heroicons_outline:cursor-click',
                link: '/line/list',
            },
        ],
    },
    {
        title: 'ผู้ใช้งาน',
        subtitle: 'เมนูหลักการใช้งานสำหรับผู้ใช้งาน',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [
            // {
            //     title: 'โปรไฟล์สมาขิก',
            //     type: 'basic',
            //     link: '/profile',
            //     icon: 'heroicons_outline:pencil-alt',
            // },
            {
                title: 'ออกจากระบบ',
                type: 'basic',
                link: '/sign-out',
                icon: 'heroicons_outline:lock-closed',
            },
        ],
    },
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboards',
        title: 'Dashboards',
        tooltip: 'Dashboards',
        type: 'aside',
        icon: 'heroicons_outline:home',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'apps',
        title: 'Apps',
        tooltip: 'Apps',
        type: 'aside',
        icon: 'heroicons_outline:qrcode',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'pages',
        title: 'Pages',
        tooltip: 'Pages',
        type: 'aside',
        icon: 'heroicons_outline:document-duplicate',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'user-interface',
        title: 'UI',
        tooltip: 'UI',
        type: 'aside',
        icon: 'heroicons_outline:collection',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'navigation-features',
        title: 'Navigation',
        tooltip: 'Navigation',
        type: 'aside',
        icon: 'heroicons_outline:menu',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboards',
        title: 'DASHBOARDS',
        type: 'group',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'apps',
        title: 'APPS',
        type: 'group',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'others',
        title: 'OTHERS',
        type: 'group',
    },
    {
        id: 'pages',
        title: 'Pages',
        type: 'aside',
        icon: 'heroicons_outline:document-duplicate',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'user-interface',
        title: 'User Interface',
        type: 'aside',
        icon: 'heroicons_outline:collection',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'navigation-features',
        title: 'Navigation Features',
        type: 'aside',
        icon: 'heroicons_outline:menu',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboards',
        title: 'Dashboards',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'apps',
        title: 'Apps',
        type: 'group',
        icon: 'heroicons_outline:qrcode',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'pages',
        title: 'Pages',
        type: 'group',
        icon: 'heroicons_outline:document-duplicate',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'user-interface',
        title: 'UI',
        type: 'group',
        icon: 'heroicons_outline:collection',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'navigation-features',
        title: 'Misc',
        type: 'group',
        icon: 'heroicons_outline:menu',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
];
