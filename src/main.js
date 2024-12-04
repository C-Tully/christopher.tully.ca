import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { BButton, BModal } from "bootstrap-vue-next";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";

createApp(App)
  .use(router)
  .use("BModal", BModal)
  .use("BButton", BButton)
  .mount("#app");
