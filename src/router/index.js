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

  {
    path: "/ponuda",
    name: "ponuda",

    component: () => import("../views/PonudaView.vue"),
    props: (route) => ({ filter: route.query.filter }),
  },

  {
    path: "/ponuda-pogrebno",
    name: "ponuda-pogrebno",

    component: () => import("../views/PonudaPogrebnoView.vue"),
    props: (route) => ({ filter: route.query.filter }),
  },
  {
    path: "/ponuda-lijesovi",
    name: "ponuda-lijesovi",

    component: () => import("../views/PonudaLijesovi.vue"),
    props: (route) => ({ filter: route.query.filter }),
  },
  {
    path: "/prijevoz-pokojnika",
    name: "/prijevoz-pokojnika",

    component: () => import("../views/PrijevozPokojnika.vue"),
    props: (route) => ({ filter: route.query.filter }),
  },

  {
    path: "/postupak-kod-smrti",
    name: "/postupak-kod-smrti",

    component: () => import("../views/FaqView.vue"),
  },
  {
    path: "/kremiranje",
    name: "/kremiranje",

    component: () => import("../views/CreamationView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
