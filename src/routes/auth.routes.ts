import AuthLayout from '@/app/auth/AuthLayout.vue'

export default [
  {
    path: '/',
    component: AuthLayout,
    children: [
      {
        path: '',
        component: () => import('@/views/WelcomeView.vue'),
        meta: { title: 'Event Attendance Tracker' }
      },
      {
        path: 'login',
        component: () => import('@/views/LoginView.vue'),
        meta: { title: 'Log in' }
      },
      {
        path: 'register',
        component: () => import('@/views/RegisterView.vue'),
        meta: { title: 'Register' }
      },
      {
        path: 'forgot-passsword',
        component: () => import('@/views/ForgotPasswordView.vue'),
        meta: { title: 'Forgot Passsword' }
      }
    ]
  }
]
