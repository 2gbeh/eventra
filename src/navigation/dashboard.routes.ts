import DashboardLayout from "@/components/_layouts/dashboard/DashboardLayout.vue";

export default [
  {
    path: "/dashboard",
    component: DashboardLayout,
    children: [
      {
        path: "",
        name: "home",
        component: () => import("@/views/home/HomeView.vue"),
        meta: { title: "Home" },
      },
      {
        path: "profile",
        name: "profile",
        component: () => import("@/views/profile/ProfileView.vue"),
        meta: { title: "Profile" },
      },
      {
        path: "settings",
        name: "settings",
        component: () => import("@/views/settings/SettingsView.vue"),
        meta: { title: "Settings" },
      },
      {
        path: "attendance/:eventId",
        name: "attendance",
        component: () => import("@/views/attendance/AttendanceView.vue"),
        props: true,
        meta: { title: "Attendance" },
      },
      {
        path: "events/:eventId",
        name: "event",
        component: () => import("@/views/event/EventView.vue"),
        props: true,
        meta: { title: "Event" },
      },
    ],
  },
  {
    path: "/home",
    redirect: "/dashboard",
  },
];
