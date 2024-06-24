import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import { apiKey } from "./secret";

createApp(App).use(store).mount("#app");