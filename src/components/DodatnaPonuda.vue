<template>
  <div class="bg-white">
    <div
      class="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    >
      <h2
        class="text-[28px] sm:text-[40px] font-normal tracking-tight text-gray-900"
      >
        Dodatna ponuda
      </h2>
      <p class="mt-4 text-base text-gray-500">
        Bilo da tražite elegantan buket za posebnu priliku, unikatni cvjetni
        aranžman ili mali znak pažnje, kod nas ćete pronaći savršen izbor.
      </p>

      <div
        class="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0"
      >
        <a
          v-for="category in categories"
          :key="category.name"
          :href="category.href"
          class="group block"
        >
          <img
            :src="category.imageSrc"
            :alt="category.imageAlt"
            class="aspect-[3/2] w-full rounded-lg object-cover group-hover:opacity-75 lg:aspect-[5/6]"
          />
          <h3 class="mt-4 text-base font-normal text-gray-900">
            {{ category.name }}
          </h3>
          <p class="mt-2 text-sm text-gray-500">{{ category.description }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import organiziranjeGlazbe from "@/assets/images/organiziranje-glazbe.jpg";
import cvijeceZaEvente from "@/assets/images/cvijece-za-evente.jpg";
import ponudaLijesova from "@/assets/images/ponuda-lijesova.jpg";
const categories = [
  {
    name: "Organiziranje glazbe",
    href: "",
    imageSrc: organiziranjeGlazbe,
    imageAlt: "Organiziranje glazbe za sve prilike",
    description: "Usluga od organiziranja glazbe za potrebe priredba.",
  },
  {
    name: "Buketi",
    href: "ponuda?filter=buketi",
    imageSrc: cvijeceZaEvente,
    imageAlt:
      "Naša usluga uključuje izradu vijenaca, buketa i drugih cvjetnih dekoracija prilagođenih vašim potrebama.",
    description:
      "Naša usluga uključuje izradu vijenaca, buketa i drugih cvjetnih dekoracija prilagođenih vašim potrebama.",
  },
  {
    name: "Ponuda lijesova",
    href: "/ponuda-pogrebno?filter=lijesovi",
    imageSrc: ponudaLijesova,
    imageAlt: "Ponuda lijesova",
    description:
      "Želite samo odrediti proizvod ili neku od naših pogrebnih usluga? Stojimo Vam na raspolaganju za sve Vaše upite.",
  },
];
</script>
