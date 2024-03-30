import AuthLayout from "@/components/_layouts/auth/AuthLayout.vue";

export default [
  {
    path: "/",
    component: AuthLayout,
    children: [
      {
        path: "",
        name: "welcome",
        component: () => import("@/views/welcome/WelcomeView.vue"),
        meta: { title: "Event Attendance Tracker" },
      },
      {
        path: "login",
        name: "login",
        component: () => import("@/views/login/LoginView.vue"),
        meta: { title: "Log in" },
      },
      {
        path: "register",
        name: "register",
        component: () => import("@/views/register/RegisterView.vue"),
        meta: { title: "Register" },
      },
      {
        path: "forgot-password",
        name: "forgot-password",
        component: () =>
          import("@/views/forgot-password/ForgotPasswordView.vue"),
        meta: { title: "Forgot Passsword" },
      },
      {
        path: "reset-password",
        name: "reset-password",
        component: () => import("@/views/reset-password/ResetPasswordView.vue"),
        meta: { title: "Reset Passsword" },
      },
      {
        path: "verify-email",
        name: "verify-email",
        component: () => import("@/views/verify-email/VerifyEmailView.vue"),
        meta: { title: "Verify Email" },
      },
      {
        path: "splash",
        name: "splash",
        component: () => import("@/components/Splash.vue"),
        meta: { title: "Splash" },
      },
      {
        path: "tent",
        name: "tent",
        component: () => import("@/components/Tent.vue"),
        meta: { title: "Tent" },
      },
    ],
  },
];
