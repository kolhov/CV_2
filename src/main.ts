import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "@csstools/normalize.css";
import "@/styles/reset.scss";
import Echopix from "@/components/icons/Echopix.vue";
import Eidos from "@/components/icons/Eidos.vue";


const app = createApp(App);

app.use(createPinia());
app.component('Echopix', Echopix)
app.component('Eidos', Eidos)

app.mount("#app");
