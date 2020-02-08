import Main from '@/view/main'
import User from '@/view/security/user'
import Role from '@/view/security/role'
import SampleBenchmark from '@/view/sample/sample.vue'
import Profile from '@/view/profile'
import ConfCenter from '@/view/confcenter'
import ConfCenterManage from '@/view/confcenter/confcentermanage.vue'

export default [{
        path: '/login',
        name: 'login',
        meta: {
            title: 'Login',
            hideInMenu: true
        },
        component: () =>
            import ('@/view/login/login.vue')
    },
    {
        path: '/',
        name: 'main',
        redirect: '/home',
        component: Main,
        meta: {
            icon: 'md-home',
            hideInMenu: true,
            notCache: true
        },
        children: [{
            path: 'home',
            name: 'home',
            meta: {
                hideInMenu: true,
                notCache: true
            },
            component: () =>
                import ('@/view/home')
        }]
    },
    {
        path: '/security',
        name: 'security',
        meta: {
            icon: 'md-construct',
            title: 'Security',
            // hide: true,
            // hideInMenu: true,
            access: ['Admin']
        },
        component: Main,
        children: [{
                path: '/security/users',
                name: 'users',
                meta: {
                    icon: 'ios-people',
                    title: 'List Users'
                },
                component: User
            },
            {
                path: '/security/roles',
                name: 'roles',
                meta: {
                    icon: 'ios-people-outline',
                    title: 'List Roles'
                },
                component: Role
            },
            {
                path: '/security/permission',
                name: 'permission',
                meta: {
                    icon: 'ios-cog',
                    title: 'List Permission'
                },
                component: Role
            }
        ]

    },
    {
        path: '/profile',
        name: '',
        meta: {
            hideInMenu: true,
        },
        component: Main,
        children: [{
            path: '',
            name: 'Profile',
            meta: {
                icon: 'ios-flower',
                title: 'profile',
            },
            component: Profile
        }]
    },
    {
        path: '/sample',
        name: 'sample',
        meta: {
            icon: 'md-construct',
            title: 'Sample',
            // hide: true,
            // hideInMenu: true,
            access: ['Admin']
        },
        component: Main,
        children: [{
                path: '/sample/benchmark',
                name: 'sample_benchmark',
                meta: {
                    icon: 'ios-people',
                    title: 'List benchmark'
                },
                component: SampleBenchmark
            }
        ]

    },
    {
        path: '/conf',
        name: 'confcenter',
        meta: {
            icon: 'ios-flag',
            title: 'Config Center',
        },
        component: Main,
        children: [{
                path: '/conf/config',
                name: 'confCenter',
                meta: {
                    icon: 'ios-flower',
                    title: 'config',
                    componentName: 'ConfCenter',
                    access: ['Admin','configurer']
                },
                component: ConfCenter
            },
            {
                path: '/conf/manage',
                name: 'confManage',
                meta: {
                    icon: 'ios-flower',
                    title: 'management',
                    access: ['Admin', 'confmanager'],
                    componentName: 'ConfCenterManage'
                },
                component: ConfCenterManage
            },
        ]
    },
    {
        path: '/401',
        name: 'error_401',
        component: () =>
            import ('@/view/error-page/401.vue')
    },
    {
        path: '/500',
        name: 'error_500',
        component: () =>
            import ('@/view/error-page/500.vue')
    },
    {
        path: '*',
        name: 'error_404',
        component: () =>
            import ('@/view/error-page/404.vue')
    }
]
