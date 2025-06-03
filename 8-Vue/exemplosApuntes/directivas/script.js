import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      seen: false,
      url: "https://previews.123rf.com/images/bahtiarmaulana/bahtiarmaulana2204/bahtiarmaulana220400040/185159316-slice-of-pizza-cartoon-vector-cartoon-illustration-cartoon-clipart.jpg",
      attributeName: "href",
    };
  },
}).mount("#app");
