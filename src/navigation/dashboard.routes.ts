import DashboardLayout from "@/components/_layouts/dashboard/DashboardLayout.vue";

export default [
  {
    path: "/dashboard",
    component: DashboardLayout,
    children: [
      {
        path: "",
        name: "dashboard",
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
        meta: { title: "About Event" },
      },
      {
        path: "add-user/:eventId",
        name: "add-user",
        component: () => import("@/views/add-user/AddUserView.vue"),
        props: true,
        meta: { title: "Add User" },
      },
      {
        path: "users/:userId",
        name: "user",
        component: () => import("@/views/user/UserView.vue"),
        props: true,
        meta: { title: "Attendee" },
      },
    ],
  },
  {
    path: "/home",
    redirect: "/dashboard",
  },
];
