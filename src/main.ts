import "./main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import twMergeDirective from "tailwind-merge-vue-directive";
//
import App from "./App.vue";
import router from "./routes/router";
import TheLogo from "./components/TheLogo.vue";
import APP from "./constants/APP";
import PATH from "./constants/PATH";
import M from "./constants/MOCK";

// APP INSTANCE
const app = createApp(App);

// CONSTANTS
app.config.globalProperties.$APP = APP;
app.config.globalProperties.$PATH = PATH;
app.config.globalProperties.$M = M;

// COMPONENTS
app.component("the-logo", TheLogo);

// MIDDLEWARE
app.use(createPinia());
app.use(router);
app.use(twMergeDirective);

// 
app.mount("#app");
