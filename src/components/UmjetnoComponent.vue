<template>
  <div class="overflow-hidden bg-white py-32">
    <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8"
      >
        <div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
          <h2
            class="text-4xl font-normal tracking-tight text-gray-900 sm:text-5xl"
          >
            {{ t("artificial_flowers") }}
          </h2>
          <p class="mt-6 text-xl/8 text-gray-600">
            {{ t("artificial_flowers_intro") }}
          </p>
          <p class="mt-6 text-base/7 text-gray-600">
            {{ t("artificial_flowers_description") }}
          </p>
          <div class="mt-10 flex">
            <a
              href="/ponuda?filteri=umjetno_cvijece"
              class="rounded-md bg-primary text-xl px-[20px] text-black px-3.5 py-2.5 text-sm font-normal shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {{ t("view_more") }} <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div
          class="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents"
        >
          <div
            class="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end"
          >
            <img
              src="../assets/images/umjetno-cvijece-section-1.jpg"
              :alt="t('artificial_flowers_image_alt_1')"
              class="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
            />
          </div>
          <div
            class="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8"
          >
            <div
              class="order-first flex w-64 flex-none justify-end self-end lg:w-auto"
            >
              <img
                src="../assets/images/umjetno-cvijece-section-2.png"
                :alt="t('artificial_flowers_image_alt_2')"
                class="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
            <div class="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
              <img
                src="../assets/images/umjetno-cvijece-section-4.jpg"
                :alt="t('artificial_flowers_image_alt_3')"
                class="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
            <div
              class="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none"
            >
              <img
                src="../assets/images/umjetno-cvijece-section-3.jpg"
                :alt="t('artificial_flowers_image_alt_4')"
                class="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  name: "ArtificialFlowersSection",
  setup() {
    const { t } = useI18n();
    return { t };
  },
};
</script>
