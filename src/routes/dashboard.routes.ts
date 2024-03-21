import DashboardLayout from '@/app/dashboard/DashboardLayout.vue'

export default [
  {
    path: '/dashboard',
    component: DashboardLayout,
    children: [
      {
        path: '',
        component: () => import('@/views/HomeView.vue'),
        meta: { title: 'Home' }
      },
      {
        path: 'profile',
        component: () => import('@/views/ProfileView.vue'),
        meta: { title: 'Profile' }
      }
    ]
  },
  {
    path: '/home',
    redirect: '/dashboard'
  }
]
