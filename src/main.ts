import { createApp } from "vue";
import App from "./App.vue";
import LycUi from "./index";
import "./doc/doc-style.scss";
import router from './router'

const app = createApp(App);

app.use(LycUi).use(router);
app.mount("#app");
