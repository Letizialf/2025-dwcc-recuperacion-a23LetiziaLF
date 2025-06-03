import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    incrementar() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    submitForm(event) {
      console.log("Enviado");
    },
  },
}).mount("#app");
