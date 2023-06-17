import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as nativeComponent from "vuetify/components";
import * as directives from "vuetify/directives";
import { VDataTable } from "vuetify/labs/VDataTable";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "@/assets/css/tailwind.css";

// Layout
import MainLayout from "@/layouts/MainLayout/MainLayout.vue";
import NonLayout from "@/layouts/NonLayout/NonLayout.vue";
import { Layout } from "./layouts/layout";

const vuetify = createVuetify({
  components: {
    VDataTable,
    ...nativeComponent,
  },
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: "dark",
  },
});

const app = createApp(App);

app
  .use(vuetify)
  .use(store)
  .use(router)
  .component(Layout.MainLayout, MainLayout)
  .component(Layout.NonLayout, NonLayout)
  .mount("#app");
