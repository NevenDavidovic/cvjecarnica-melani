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
          <div class="flex flex-1 flex-col space-y-2 p-4">
            <h3 class="text-sm font-medium text-gray-900">
              <a :href="product.href">
                <span aria-hidden="true" class="absolute inset-0" />
                {{ product.name }}
              </a>
            </h3>
            <p class="text-sm text-gray-500">{{ product.description }}</p>
            <div class="flex flex-1 flex-col justify-end">
              <p class="text-sm italic text-gray-500">{{ product.options }}</p>
              <p class="text-base font-medium text-gray-900">
                {{ product.price }}
              </p>
            </div>
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

export default {
  name: "ProductsExample",

  data() {
    return {
      products: [
        {
          id: 1,
          name: "ART-230-M",
          href: "#",
          price: "$256",
          description: "",
          options: "8 colors",
          imageSrc: lijes1,
          imageAlt: "",
        },
        {
          id: 2,
          name: "ART-280-A",
          href: "#",
          price: "$32",
          description: "",
          options: "Black",
          imageSrc: lijes2,
          imageAlt: "",
        },
        {
          id: 3,
          name: "Basic Tee",
          href: "#",
          price: "$32",
          description: "",
          options: "Black",
          imageSrc: lijes3,
          imageAlt: "",
        },
        {
          id: 4,
          name: "Basic Tee",
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
          name: "ART. Francuz 102- posljedna vecera",
          href: "#",
          price: "$32",
          description: "",
          options: "Black",
          // Umjesto stringa 'organiziranjeGlazbe', koristimo uvozenu sliku
          imageSrc: lijes6,
          imageAlt: "",
        },
      ],
    };
  },
};
</script>
