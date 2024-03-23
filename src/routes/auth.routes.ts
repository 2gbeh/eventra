import AuthLayout from "@/components/_layouts/auth/AuthLayout.vue";

export default [
  {
    path: "/",
    component: AuthLayout,
    children: [
      {
        path: "",
        component: () => import("@/views/welcome/WelcomeView.vue"),
        meta: { title: "Event Attendance Tracker" },
      },
      {
        path: "login",
        component: () => import("@/views/login/LoginView.vue"),
        meta: { title: "Log in" },
      },
      {
        path: "register",
        component: () => import("@/views/register/RegisterView.vue"),
        meta: { title: "Register" },
      },
      {
        path: "forgot-password",
        component: () =>
          import("@/views/forgot-password/ForgotPasswordView.vue"),
        meta: { title: "Forgot Passsword" },
      },
      {
        path: "reset-password",
        component: () => import("@/views/reset-password/ResetPasswordView.vue"),
        meta: { title: "Reset Passsword" },
      },
      {
        path: "verify-email",
        component: () => import("@/views/verify-email/VerifyEmailView.vue"),
        meta: { title: "Verify Email" },
      },
      {
        path: "splash",
        component: () => import("@/components/Splash.vue"),
        meta: { title: "Splash" },
      },
      {
        path: "tent",
        component: () => import("@/components/Tent.vue"),
        meta: { title: "Tent" },
      },
    ],
  },
];
