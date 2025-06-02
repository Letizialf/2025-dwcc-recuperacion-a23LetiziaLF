// Importamos a función de Vue 'createApp' que crea unha nova instancia dunha aplicación
import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

// createApp recibe como parámetro un compoñente (o compoñente raíz)
createApp({
  // A configuración da conexión entre a aplicación e o HTML realízase a través das propiedades e métodos do obxecto que recibe 'createApp' como parámetro

  data() {
    // Este obxecto ten, entre outros, o método 'data()' que devolve OUTRO obxecto do cal, as súas propiedades conforman o estado reactivo do compoñente
    return {
      // Estas propiedades son accesibles dende o HTML e, cando se modifican, como cambian, o estado reactivo do compoñente tamén cambiará
      message: "Ola Mundo!",
      // MIRAR INDEX.HTML onde se chama a esta propiedade
    };
  },
}).mount("#app");
// 'mount' monta a instancia da app no elemento do HTML indicado, neste caso creamos no HTML un div con id = 'app', no que se montará a aplicación Vue
// A aplicación non amosará nada ata que se invoque este método
