import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      message: "Ola mundo cruel",
      message2: "Ola",
      messageEvent: "recibo event",
    };
  },
  methods: {
    greet(event) {
      // O método recibe automáticamente o evento do DOM, polo que se nos permite acceder ó elemento que lanzou o evento
      console.log(event.target);
      console.log(`${this.message}`);
    },
    // Sen embargo, ós eventos podemos pasarlles parámetros personalizados no html e usalos dende aquí
    //   Se lle pasamos algún parámetro e queremos acceder ó obxecto 'event' teremos que pasalo tamén como parámetro, NON SE PASA AUTOMÁTICAMENTE
    say(message, event) {
      this.message2 = message;

      //   console.log(event.target);
      // Non funciona porque no HTML non estamos pasando a variable especial $event
    },
    sayEvent(message, event) {
      this.messageEvent = message;
      console.log(event.target);
    },
  },
}).mount("#app");
