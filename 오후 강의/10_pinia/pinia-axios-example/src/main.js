import App from "./App.vue";
import "./assets/main.css";
import router from "./router";

import { createApp } from "vue";
import { createPinia } from "pinia";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
