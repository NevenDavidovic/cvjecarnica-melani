<template>
  <div class="min-h-screen">
    <NavbarComponent :isSectionVisible="isSectionVisible" />

    <HeroBanner
      :title="t('prijevoz_pokojnika')"
      :description="t('phone_numbers')"
      imageSrc="prijevoz-pogrebno.jpg"
      :imageAlt="t('prijevoz_pokojnika')"
    />
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center my-[50px] lg:my-[100px]"
    >
      <div>
        <h2 class="text-4xl font-bold text-gray-800 mb-4">
          {{ t("prijevoz_pokojnika") }}
        </h2>
        <p class="text-lg text-gray-600 mb-6">
          {{ t("transport_service_intro") }}
        </p>
        <p class="text-lg text-gray-600 mb-6">
          {{ t("transport_service_details") }}
        </p>
        <p class="text-lg text-gray-600 mb-6">
          {{ t("transport_service_formalities") }}
        </p>
        <div class="flex space-x-4">
          <a
            href="/postupak-kod-smrti"
            class="px-6 py-3 bg-primary text-whitesmoke rounded-lg"
          >
            {{ t("death_case_procedure") }}
          </a>
          <a
            href="tel:+385 92 199 2352"
            class="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary-100 flex items-center"
          >
            {{ t("call_now") }}
          </a>
        </div>
      </div>
      <div>
        <div
          class="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg"
        >
          <img
            src="../assets/images/kombi-za-prijevoz.jpg"
            alt="Vehicle used for transporting the deceased"
            class="w-full h-full object-cover"
          />
        </div>
        <p class="text-sm text-gray-500 mt-4">
          Naš moderno opremljen prijevoz osigurava dostojanstven transport
          pokojnika.
        </p>
      </div>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-[50px] mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 bg-white"
    >
      <div
        v-for="image in prijevoz"
        :key="image.filename"
        :style="{
          backgroundImage: `url(${require(`@/assets/ponuda_pogrebno/prijevoz_pokojnika/${image.filename}`)})`,
        }"
        class="hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-transform hover:scale-105 h-[200px] w-full lg:w-full xl:h-[300px] lg:max-w-full sm:max-w-[350px] sm:mx-auto rounded-lg bg-cover bg-center cursor-pointer"
        @click="openModal(image)"
      ></div>
    </div>
    <div
      v-if="isModalOpen"
      class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      @click.self="closeModal"
    >
      <div class="relative">
        <img
          :src="currentImageSrc"
          alt="Full-screen image"
          class="object-contain"
          style="max-width: calc(100vw - 2rem); max-height: calc(100vh - 2rem)"
        />
        <button
          @click="closeModal"
          class="absolute top-4 right-4 text-white text-2xl font-bold"
        >
          ✕
        </button>
      </div>
    </div>

    <FooterComponent />
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
import FooterComponent from "../components/FooterComponent.vue";
import NavbarComponent from "@/components/NavbarComponent.vue";
import HeroBanner from "@/components/HeroBanner.vue";

export default {
  name: "PonudaPogrebno",
  components: {
    FooterComponent,
    NavbarComponent,
    HeroBanner,
  },
  props: {
    filter: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      isSectionVisible: false,
      prijevoz: [],
      isModalOpen: false,
      currentImage: null,
    };
  },
  setup() {
    const { t } = useI18n();
    return { t };
  },
  beforeUnmount() {
    document.body.style.overflow = "";
  },
  created() {
    const prijevoz = require.context(
      "@/assets/ponuda_pogrebno/prijevoz_pokojnika",
      false,
      /\.(png|jpe?g|svg)$/
    );
    this.prijevoz = prijevoz.keys().map((filename) => ({
      filename: filename.slice(2),
      title: filename.slice(2, -4),
      alt: filename.slice(2, -4),
    }));
  },
  computed: {
    currentImageSrc() {
      if (!this.currentImage) return "";
      try {
        return require(`@/assets/ponuda_pogrebno/prijevoz_pokojnika/${this.currentImage.filename}`);
      } catch (error) {
        console.error("Error loading image:", error);
        return "";
      }
    },
  },
  methods: {
    openModal(image) {
      this.currentImage = image;
      this.isModalOpen = true;
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    },
    closeModal() {
      this.currentImage = null;
      this.isModalOpen = false;
      document.body.style.overflow = "auto";
    },
  },
};
</script>
