<template>
  <div
    ref="section"
    class="overflow-hidden bg-white py-32 transition-all duration-1000 ease-in-out"
  >
    <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8"
      >
        <div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
          <h2
            class="text-4xl font-normal tracking-tight text-gray-900 sm:text-5xl opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-100"
          >
            {{ t("artificial_flowers") }}
          </h2>
          <p
            class="mt-6 text-xl/8 text-gray-600 opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-200"
          >
            {{ t("artificial_flowers_intro") }}
          </p>
          <p
            class="mt-6 text-base/7 text-gray-600 opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-300"
          >
            {{ t("artificial_flowers_description") }}
          </p>
          <div
            class="mt-10 flex opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-400"
          >
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
            class="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end opacity-0 scale-95 transition-all duration-1000 ease-out delay-500"
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
              class="order-first flex w-64 flex-none justify-end self-end lg:w-auto opacity-0 scale-95 transition-all duration-1000 ease-out delay-600"
            >
              <img
                src="../assets/images/umjetno-cvijece-section-2.png"
                :alt="t('artificial_flowers_image_alt_2')"
                class="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
            <div
              class="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none opacity-0 scale-95 transition-all duration-1000 ease-out delay-700"
            >
              <img
                src="../assets/images/umjetno-cvijece-section-4.jpg"
                :alt="t('artificial_flowers_image_alt_3')"
                class="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
            <div
              class="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none opacity-0 scale-95 transition-all duration-1000 ease-out delay-800"
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
import { ref, onMounted } from "vue";

export default {
  name: "ArtificialFlowersSection",
  setup() {
    const { t } = useI18n();
    const section = ref(null);

    const handleScroll = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(
                "opacity-100",
                "translate-y-0",
                "scale-100"
              );
              entry.target.classList.remove(
                "opacity-0",
                "translate-y-10",
                "scale-95"
              );
            }
          });
        },
        { threshold: 0.2 }
      );

      if (section.value) {
        // Observe each element inside the section
        section.value
          .querySelectorAll("*")
          .forEach((el) => observer.observe(el));
      }
    };

    onMounted(() => {
      handleScroll();
    });

    return { t, section };
  },
};
</script>
