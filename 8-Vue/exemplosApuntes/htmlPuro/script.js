import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

// Solo se utiliza a directiva para datos introducidos polo desarrollador, NUNCA para datos introducidos polo usuario

createApp({
  data() {
    return {
      rawHtml: "<b> This should be bold </b>",
    };
  },
}).mount("#app");
