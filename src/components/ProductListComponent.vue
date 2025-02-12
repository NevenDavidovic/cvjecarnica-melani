<template>
  <div class="bg-white">
    <div
      class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    >
      <h2 class="sr-only">Products</h2>
      <div
        class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8"
      >
        <div
          v-for="product in products"
          :key="product.id"
          class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
        >
          <img
            :src="product.imageSrc"
            :alt="product.imageAlt"
            class="aspect-[3/4] w-full bg-gray-200 object-cover group-hover:opacity-75 sm:aspect-auto sm:h-96"
          />
          <div class="flex flex-1 flex-col space-y-2 p-4 bg-gray-200">
            <h3 class="text-sm font-medium text-gray-900">
              <a :href="product.href">
                <span
                  aria-hidden="true"
                  class="absolute inset-0 font-semibold"
                />
                {{ product.name }}
              </a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lijes1 from "@/assets/images/lijesovi/ART-230-M.png";
import lijes2 from "@/assets/images/lijesovi/ART-280-A.png";
import lijes3 from "@/assets/images/lijesovi/ART-290.png";
import lijes4 from "@/assets/images/lijesovi/ART-295.png";
import lijes5 from "@/assets/images/lijesovi/ART-330.png";
import lijes6 from "@/assets/images/lijesovi/ART-Francuz-102-posljedna-vecera.png";
import lijes7 from "@/assets/images/lijesovi/ART._400.png";
import lijes8 from "@/assets/images/lijesovi/MeninA_Mod._290-M.png";

export default {
  name: "ProductsExample",

  data() {
    return {
      products: [
        {
          id: 1,
          name: "ART.230/M",
          href: "#",
          price: "$256",
          description: "",
          options: "8 colors",
          imageSrc: lijes1,
          imageAlt: "",
        },
        {
          id: 2,
          name: "ART.280/A",
          href: "#",
          price: "$32",
          description: "",
          options: "Black",
          imageSrc: lijes2,
          imageAlt: "",
        },
        {
          id: 3,
          name: "ART. 290",
          href: "#",
          price: "$32",
          description: "",
          options: "Black",
          imageSrc: lijes3,
          imageAlt: "",
        },
        {
          id: 4,
          name: "ART. 295",
          href: "#",
          price: "$32",
          description: "",
          options: "Black",
          imageSrc: lijes4,
          imageAlt: "",
        },
        {
          id: 5,
          name: "ART. 330",
          href: "#",
          price: "$132",
          description: "",
          options: "Black",
          imageSrc: lijes5,
          imageAlt: "",
        },
        {
          id: 6,
          name: "ART. FRANCUZ 102 POSLJEDNJA VEČERA",
          href: "#",
          price: "$32",
          description: "",
          options: "Black",
          imageSrc: lijes6,
          imageAlt: "",
        },
        {
          id: 7,
          name: "ART. 400",
          href: "#",
          price: "$32",
          description: "",
          options: "Black",
          imageSrc: lijes7,
          imageAlt: "",
        },
        {
          id: 8,
          name: "Mod. 290/M",
          href: "#",
          price: "$32",
          description: "",
          options: "Black",
          imageSrc: lijes8,
          imageAlt: "",
        },
      ],
    };
  },
};
</script>
