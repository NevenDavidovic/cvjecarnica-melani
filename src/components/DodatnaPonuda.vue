<template>
  <div class="bg-white">
    <div
      class="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    >
      <h2
        class="text-[28px] sm:text-[40px] font-normal tracking-tight text-gray-900"
      >
        {{ $t("additional_offer") }}
      </h2>
      <p class="mt-4 text-base text-gray-500">
        {{ $t("additional_offer_text") }}
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

<script>
import { useI18n } from "vue-i18n";
import organiziranjeGlazbe from "@/assets/images/organiziranje-glazbe.jpg";
import cvijeceZaEvente from "@/assets/images/cvijece-za-evente.jpg";
import ponudaLijesova from "@/assets/images/ponuda-lijesova.jpg";

export default {
  setup() {
    const { t } = useI18n();

    return {
      t,
    };
  },
  data() {
    return {
      categories: [
        {
          name: this.t("music_organization"),
          href: "",
          imageSrc: organiziranjeGlazbe,
          imageAlt: this.t("music_organization_text"),
          description: this.t("music_organization_text"),
        },
        {
          name: this.t("bouquet"),
          href: "ponuda?filter=buketi",
          imageSrc: cvijeceZaEvente,
          imageAlt: this.t("flower_service"),
          description: this.t("flower_service"),
        },
        {
          name: this.t("coffin_offer"),
          href: "/ponuda-pogrebno?filter=lijesovi",
          imageSrc: ponudaLijesova,
          imageAlt: this.t("coffin_offer"),
          description: this.t("funeral_services"),
        },
      ],
    };
  },
};
</script>
