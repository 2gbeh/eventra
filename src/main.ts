import "./main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import twMergeDirective from "tailwind-merge-vue-directive";
import CarbonVue3 from "@carbon/vue";
//
import App from "./App.vue";
import router from "./navigation/router.js";
import Logo from "./components/logo/Logo.vue";
import AppBar from "./components/app-bar/AppBar.vue";
import SafeAreaView from "./components/SafeAreaView.vue";
import SafeScrollView from "./components/SafeScrollView.vue";
import Tent from "./components/Tent.vue";

import APP from "./constants/APP";
import PATH from "./constants/PATH";
import COLOR from "./constants/COLOR";
import M from "./constants/MOCK";

import "./types/globalProperties.type";

// APP INSTANCE
const app = createApp(App);

// CONSTANTS
app.config.globalProperties.$APP = APP;
app.config.globalProperties.$PATH = PATH;
app.config.globalProperties.$COLOR = COLOR;
app.config.globalProperties.$M = M;

// COMPONENTS
app.component("Tent", Tent);
app.component("Logo", Logo);
app.component("AppBar", AppBar);
app.component("SafeAreaView", SafeAreaView);
app.component("SafeScrollView", SafeScrollView);

// MIDDLEWARE
app.use(createPinia());
app.use(router);
app.use(twMergeDirective);
app.use(CarbonVue3);

//
app.mount("#root");
