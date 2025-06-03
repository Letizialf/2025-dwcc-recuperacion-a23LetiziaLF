import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      texto: "",
    };
  },
  methods: {
    sincronizarTexto(event) {
      this.texto = event.target.value;
    },
  },
}).mount("#app");
