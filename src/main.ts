import "./main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import twMergeDirective from "tailwind-merge-vue-directive";
//
import App from "./App.vue";
import router from "./routes/router";
import TheLogo from "./components/the-logo/TheLogo.vue";
import APP from "./constants/APP";
import PATH from "./constants/PATH";
import COLOR from "./constants/COLOR";
import M from "./constants/MOCK";
import './types/globalProperties.type'

// APP INSTANCE
const app = createApp(App);

// CONSTANTS
app.config.globalProperties.$APP = APP;
app.config.globalProperties.$PATH = PATH;
app.config.globalProperties.$COLOR = COLOR;
app.config.globalProperties.$M = M;

// COMPONENTS
app.component("TheLogo", TheLogo);

// MIDDLEWARE
app.use(createPinia());
app.use(router);
app.use(twMergeDirective);

//
app.mount("#root");
