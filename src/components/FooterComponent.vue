<template>
  <footer class="bg-white">
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8">
          <p class="text-balance tex-left text-sm/6 text-gray-600">
            Making the world a better place through constructing elegant
            hierarchies.
          </p>
          <div class="flex gap-x-6 items-center justify-center text-center">
            <a
              v-for="item in navigation.social"
              :key="item.name"
              :href="item.href"
              class="text-gray-600 hover:text-gray-800"
            >
              <span class="sr-only">{{ item.name }}</span>
              <component :is="item.icon" class="size-12" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm/6 font-semibold text-gray-900">Cvijeće</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.solutions" :key="item.name">
                  <a
                    :href="item.href"
                    class="text-sm/6 text-gray-600 hover:text-gray-900"
                    >{{ item.name }}</a
                  >
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm/6 font-semibold text-gray-900">Adresa</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.support" :key="item.name">
                  <a
                    :href="item.href"
                    class="text-sm/6 text-gray-600 hover:text-gray-900"
                    >{{ item.name }}</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm/6 font-semibold text-gray-900">
                Pogrebne usluge
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.company" :key="item.name">
                  <a
                    :href="item.href"
                    class="text-sm/6 text-gray-600 hover:text-gray-900"
                    >{{ item.name }}</a
                  >
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm/6 font-semibold text-gray-900">
                Dodatna ponuda
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.legal" :key="item.name">
                  <a
                    :href="item.href"
                    class="text-sm/6 text-gray-600 hover:text-gray-900"
                    >{{ item.name }}</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
        <p class="text-sm/6 text-gray-600">Copyright © 2024 Melani</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { defineComponent, h } from "vue";

const navigation = {
  solutions: [
    { name: "Buketi", href: "/ponuda?filter=buketi" },
    { name: "Cvijeće za Valentinovo", href: "/ponuda?filter=valentinovo" },
    { name: "Cvijeće za Božić", href: "/ponuda?filter=bozic" },
    { name: "Umjetno Cvijeće", href: "/ponuda?filter=umjetno_cvijece" },
    { name: "Rezano cvijeće", href: "/ponuda?filter=rezano_cvijece" },
  ],
  support: [
    { name: "Ul. Mladena Vodanovića 4b", href: "#" },
    { name: "31400 Supetar", href: "#" },
    { name: "Telefon: 021/630 996", href: "#" },
  ],
  company: [
    { name: "Ponuda lijesova", href: "/pogrebno" },
    { name: "Ponuda urni", href: "/pogrebno" },
    { name: "Ponuda lampiona", href: "/pogrebno" },
  ],
  legal: [
    { name: "Pitanje prijevoza", href: "#" },
    { name: "Organiziranje glazbe", href: "#" },
    { name: "Cvijeće za Evente", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/cvjecarnica.melani",
      icon: defineComponent({
        render: () =>
          h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
            h("path", {
              "fill-rule": "evenodd",
              d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
              "clip-rule": "evenodd",
            }),
          ]),
      }),
    },
  ],
};
</script>
