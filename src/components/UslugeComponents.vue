<template>
  <section class="bg-white pb-6 pt-6">
    <div class="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <div class="container mx-auto sm:px-6 sm:p-6 bg-white">
        <!-- Header -->
        <div
          ref="headerRef"
          class="mb-16 text-center transition-all duration-1000 opacity-0 translate-y-10"
          :class="{ 'opacity-100 translate-y-0': isHeaderVisible }"
        >
          <h4
            class="text-base text-primary font-semibold tracking-wide uppercase"
          >
            {{ $t("usluge") }}
          </h4>
          <p
            class="mt-2 text-5xl lg:text-4xl font-normal tracking-tight text-gray-900"
          >
            {{ $t("full_service_range") }}
          </p>
        </div>

        <!-- Services Grid -->
        <div class="flex flex-wrap my-12">
          <div
            v-for="(service, index) in services"
            :key="index"
            ref="serviceRefs"
            class="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8 transition-all duration-1000 opacity-0 translate-y-10"
            :class="{ 'opacity-100 translate-y-0': visibleServices[index] }"
            :style="{ transitionDelay: `${index * 100}ms` }"
          >
            <div class="flex items-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="20"
                height="20"
                fill="currentColor"
                class="h-6 w-6 text-primary transform transition-transform duration-500"
                :class="{ 'scale-110': visibleServices[index] }"
              >
                <path
                  d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"
                ></path>
              </svg>
              <div class="ml-4 text-xl text-gray-900">
                {{ $t(service.title) }}
              </div>
            </div>
            <p class="leading-loose text-gray-500 text-left">
              {{ $t(service.description) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

export default {
  setup() {
    const isHeaderVisible = ref(false);
    const visibleServices = ref([]);

    const headerRef = ref(null);
    const serviceRefs = ref([]);

    // Observe the header section
    useIntersectionObserver(headerRef, ([{ isIntersecting }]) => {
      if (isIntersecting) {
        isHeaderVisible.value = true;
      }
    });

    // Observe each service item
    onMounted(() => {
      visibleServices.value = new Array(serviceRefs.value.length).fill(false);
      serviceRefs.value.forEach((el, index) => {
        useIntersectionObserver(el, ([{ isIntersecting }]) => {
          if (isIntersecting) {
            visibleServices.value[index] = true;
          }
        });
      });
    });

    return { isHeaderVisible, visibleServices, headerRef, serviceRefs };
  },
  data() {
    return {
      services: [
        { title: "transport_service", description: "international_transport" },
        { title: "arrangements", description: "arrangements_description" },
        { title: "coffins_offer", description: "coffins_description" },
        { title: "wreath_making", description: "wreath_making_description" },
        {
          title: "funeral_equipment",
          description: "funeral_equipment_description",
        },
        { title: "bouquet_making", description: "bouquet_making_description" },
        { title: "coffin_flowers", description: "coffin_flowers_description" },
        { title: "cremation", description: "cremation_description" },
      ],
    };
  },
};
</script>

<style scoped>
.opacity-0 {
  opacity: 0;
}
.opacity-100 {
  opacity: 1;
}
.translate-y-10 {
  transform: translateY(40px);
}
.translate-y-0 {
  transform: translateY(0);
}
</style>
