<template>
  <div
    class="grid min-h-[500px] grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1"
  >
    <!-- Flower Shop -->
    <div
      ref="flowerShopRef"
      class="relative flex transition-all duration-2000 opacity-0 scale-95"
      :class="{ 'opacity-100 scale-100': isFlowerShopVisible }"
    >
      <img
        src="../assets/images/cvjecarna-cat.jpg"
        alt=""
        class="absolute inset-0 size-full object-cover"
      />
      <div
        class="relative flex w-full flex-col items-start justify-end bg-black/40 p-8 sm:p-12"
      >
        <h2 class="text-lg font-medium text-white/75">
          {{ $t("flower_shop") }}
        </h2>
        <p class="mt-1 text-2xl font-medium text-white">
          {{ $t("flowers_for_all_occasions") }}
        </p>
        <a
          href="/cvjecarnica-melani"
          class="mt-4 rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50"
        >
          {{ $t("view_more") }}
        </a>
      </div>
    </div>

    <!-- Funeral Services -->
    <div
      ref="funeralRef"
      class="relative flex transition-all duration-2000 opacity-0 scale-95 delay-300"
      :class="{ 'opacity-100 scale-100': isFuneralVisible }"
    >
      <img
        src="../assets/images/pogrebno-poduzece-cat.jpg"
        alt=""
        class="absolute inset-0 size-full object-cover"
      />
      <div
        class="relative flex w-full flex-col items-start justify-end bg-black/40 p-8 sm:p-12"
      >
        <h2 class="text-lg font-medium text-white/75">
          {{ $t("funeral_services") }}
        </h2>
        <p class="mt-1 text-2xl font-medium text-white">
          {{ $t("funeral_services_description") }}
        </p>
        <a
          href="/pogrebne-usluge"
          class="mt-4 rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50"
        >
          {{ $t("view_more") }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

export default {
  setup() {
    const isFlowerShopVisible = ref(false);
    const isFuneralVisible = ref(false);

    const flowerShopRef = ref(null);
    const funeralRef = ref(null);

    // Observe Flower Shop Section
    useIntersectionObserver(flowerShopRef, ([{ isIntersecting }]) => {
      if (isIntersecting) isFlowerShopVisible.value = true;
    });

    // Observe Funeral Services Section
    useIntersectionObserver(funeralRef, ([{ isIntersecting }]) => {
      if (isIntersecting) isFuneralVisible.value = true;
    });

    return { isFlowerShopVisible, isFuneralVisible, flowerShopRef, funeralRef };
  },
};
</script>

<style scoped>
/* Initial states */
.opacity-0 {
  opacity: 0;
}
.opacity-100 {
  opacity: 1;
}
.scale-95 {
  transform: scale(0.95);
}
.scale-100 {
  transform: scale(1);
}
</style>
