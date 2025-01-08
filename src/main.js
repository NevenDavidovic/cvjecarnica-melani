import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/main.css";
// import AOS from "aos";
// import "aos/dist/aos.css";

// AOS.init({
//   duration: 1200,
//   once: true,
// });

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

createApp(App).use(store).use(router).mount("#app");
