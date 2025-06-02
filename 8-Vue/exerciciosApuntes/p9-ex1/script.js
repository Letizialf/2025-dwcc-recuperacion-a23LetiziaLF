import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

// Proba a crear diferentes propiedades no obxecto devolto por data() e mostralas dende o HTML. Proba a mostrar diferentes tipos de datos: unha cadea, un número, un booleano, un array, un obxecto, etc
createApp({
  data() {
    return {
      cadea: "Hola mundo cruel",
      numero: 34,
      booleano: false,
      arrayDeProba: ["Hola", "Mundo", "Cruel"],
      obxectoDeProba: {
        nome: "Letizia",
      },
      ano: new Date().getFullYear(),
    };
  },
}).mount("#app");
