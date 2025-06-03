import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      number: 3,
      ok: true,
      message: "buenas",
      id: 6,
    };
  },
}).mount("#app");
