import AuthLayout from '@/components/_layouts/AuthLayout.vue'

export default [
  {
    path: '/',
    component: AuthLayout,
    children: [
      {
        path: '',
        component: () => import('@/views/welcome/WelcomeView.vue'),
        meta: { title: 'Event Attendance Tracker' }
      },
      {
        path: 'login',
        component: () => import('@/views/login/LoginView.vue'),
        meta: { title: 'Log in' }
      },
      {
        path: 'register',
        component: () => import('@/views/register/RegisterView.vue'),
        meta: { title: 'Register' }
      },
      {
        path: 'forgot-passsword',
        component: () => import('@/views/forgot-password/ForgotPasswordView.vue'),
        meta: { title: 'Forgot Passsword' }
      }
    ]
  }
]
