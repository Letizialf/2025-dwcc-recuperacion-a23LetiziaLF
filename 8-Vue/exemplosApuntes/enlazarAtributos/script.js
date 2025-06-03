import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      dynamicId: "atributoDinamico",
      id: 5,
      isButtonDisabled: true, //O atributo 'disabled' incluirase se o valor é true ou ''

      // Tamén é posible declarar un obxecto JS con varias propiedades que correspondan ós atributos e enlazarse usando SÓ un v-bind
      objAttrs: {
        id: "container",
        class: "wrapper",
      },
    };
  },
}).mount("#app");
