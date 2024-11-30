import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/cvjecarnica-melani",
    name: "cvjecarnica-melani",

    component: () => import("../views/CvjecarnicaView.vue"),
  },
  {
    path: "/pogrebne-usluge",
    name: "pogrebne-usluge",

    component: () => import("../views/PogrebnoView.vue"),
  },
  {
    path: "/contact-melani",
    name: "contact-melani",

    component: () => import("../views/ContactView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
