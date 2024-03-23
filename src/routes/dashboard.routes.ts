import DashboardLayout from '@/components/_layouts/dashboard/DashboardLayout.vue'

export default [
  {
    path: '/dashboard',
    component: DashboardLayout,
    children: [
      {
        path: '',
        component: () => import('@/views/home/HomeView.vue'),
        meta: { title: 'Home' }
      },
      {
        path: 'profile',
        component: () => import('@/views/profile/ProfileView.vue'),
        meta: { title: 'Profile' }
      }
    ]
  },
  {
    path: '/home',
    redirect: '/dashboard'
  }
]
