<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl">
      <div class="relative overflow-hidden rounded-lg lg:h-96">
        <div class="absolute inset-0">
          <img
            src="../assets/images/kombi-pogrebno-2.jpg"
            :alt="t('transport_service_image_alt')"
            class="size-full object-cover"
          />
        </div>
        <div aria-hidden="true" class="relative h-96 w-full lg:hidden" />
        <div aria-hidden="true" class="relative h-32 w-full lg:hidden" />
        <div
          class="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-black/75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-96 lg:flex-col lg:items-start lg:rounded-br-none lg:rounded-tl-lg"
        >
          <div>
            <h2 class="text-xl font-normal text-secundary mb-[25px]">
              {{ t("transport_service") }}
            </h2>
            <p class="mt-1 text-sm text-gray-300">
              {{ t("transport_service_description") }}
            </p>
          </div>
          <a
            href="/prijevoz-pokojnika"
            class="mt-6 flex shrink-0 items-center justify-center rounded-md border border-secundary/25 px-4 py-3 text-base font-medium text-white hover:bg-white/10 sm:ml-8 sm:mt-0 lg:ml-0 lg:w-full"
          >
            {{ t("view_more") }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  name: "TransportServiceSection",
  setup() {
    const { t } = useI18n();
    return { t };
  },
};
</script>
