/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'cham-cong',
        title: 'Chấm công - Điểm danh',
        type: 'group',
        icon: 'heroicons_outline:shield-check',
        children: [
            {
                id: 'cham-cong-khuon-mat',
                title: 'Nhận diện khuôn mặt',
                type: 'basic',
                icon: 'heroicons_outline:shield-check',
                link: '/nhan-dien-khuon-mat'
            }
        ]
    },
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id: 'cham-cong',
        title: 'Chấm công - Điểm danh',
        type: 'group',
        icon: 'heroicons_outline:shield-check',
        children: [

        ]
    },
];

export const firstNavigation: FuseNavigationItem[] = [
    {
        id: 'hrm',
        title: 'Hệ thống thông tin nhân sự',
        type: 'basic',
        icon: 'mat_outline:psychology',
        link: 'hrm'
    },
    {
        id: 'prj',
        title: 'Hệ thống thông tin công việc',
        type: 'basic',
        icon: 'mat_outline:task',
        link: 'prj'
    },
    {
        id: 'checkin',
        title: 'Hệ thống thông tin điểm danh',
        type: 'basic',
        icon: 'mat_outline:emoji_people',
        link: 'checkin'
    }
];

export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example'
    }
];
