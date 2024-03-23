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
      },
      {
        path: 'settings',
        component: () => import('@/views/settings/SettingsView.vue'),
        meta: { title: 'Settings' }
      },
      {
        path: 'attendance',
        component: () => import('@/views/attendance/AttendanceView.vue'),
        meta: { title: 'Attendance' }
      },
      {
        path: 'event',
        component: () => import('@/views/event/EventView.vue'),
        meta: { title: 'Event' }
      }
    ]
  },
  {
    path: '/home',
    redirect: '/dashboard'
  }
]
