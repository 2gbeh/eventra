import AuthLayout from '@/modules/auth/AuthLayout.vue'

export default [
  {
    path: '/',
    component: AuthLayout,
    children: [
      {
        path: '',
        component: () => import('@/views/LoginView.vue'),
        meta: { title: 'Log in' }
      },
      {
        path: 'login',
        redirect: '/'
      },
      {
        path: 'register',
        component: () => import('@/views/RegisterView.vue'),
        meta: { title: 'register' }
      },
      {
        path: 'forgot-passsword',
        component: () => import('@/views/ForgotPasswordView.vue'),
        meta: { title: 'Forgot Passsword' }
      }
    ]
  }
]
