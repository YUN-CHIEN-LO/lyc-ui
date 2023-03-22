import { createApp } from "vue";
import App from "./App.vue";
import LycUi from "./index";
import "./styles/lyc-ui.scss";

const app = createApp(App);

app.use(LycUi);
app.mount("#app");
