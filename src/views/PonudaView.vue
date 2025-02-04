<template>
  <div class="min-h-screen">
    <NavbarComponent :isSectionVisible="isSectionVisible" />

    <HeroBanner
      :title="t('ponuda_cvijeca')"
      imageSrc="ponuda-hero.png"
      imageAlt="Ponuda cvijeća"
    />

    <div class="bg-gray-800 text-white pt-8">
      <div class="container mx-auto px-4">
        <h1 class="text-2xl font-normal mb-[50px]">{{ t("categories") }}</h1>
        <div class="flex flex-wrap justify-center mb-8">
          <button
            @click="resetingAllFilters"
            class="bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded mr-2 mb-2"
          >
            {{ t("all") }}
          </button>
          <button
            @click="filteringTheProducts('aranzmani')"
            :class="{ 'border border-white': filteri.aranzmani }"
            class="bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded mr-2 mb-2"
          >
            {{ t("arrangements") }}
          </button>
          <button
            @click="filteringTheProducts('vijenci')"
            :class="{ 'border border-white': filteri.vijenci }"
            class="bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded mr-2 mb-2"
          >
            {{ t("vijenci") }}
          </button>
          <button
            @click="filteringTheProducts('cvijece_za_lijes')"
            :class="{ 'border border-white': filteri.cvijece_za_lijes }"
            class="bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded mr-2 mb-2"
          >
            {{ t("coffin_flowers") }}
          </button>
          <button
            @click="filteringTheProducts('buketi')"
            :class="{ 'border border-white': filteri.buketi }"
            class="bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded mr-2 mb-2"
          >
            {{ t("bouquet") }}
          </button>
        </div>

        <div>
          <!-- Coffin Flowers -->
          <div
            v-if="filteri.cvijece_za_lijes"
            :class="{ 'animate-fade-in': filteri.cvijece_za_lijes }"
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-[50px]"
          >
            <h1
              class="shadow-[0_0_20px_rgba(255,255,255,0.4)] bg-gradient-to-br from-slate-800 via-slate-900 to-blue-950 flex items-center text-center text-2xl border rounded-xl justify-center"
            >
              {{ t("coffin_flowers") }}
            </h1>
            <div
              v-for="cvijece in cvijece_za_lijes"
              :key="cvijece.filename"
              @click="openModal('cvijece_za_lijes', cvijece)"
              :style="{
                backgroundImage: `url(${require(`@/assets/ponuda_cvijeca/cvijece_za_lijes/${cvijece.filename}`)})`,
              }"
              class="hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-transform hover:scale-105 h-[200px] w-full lg:w-full xl:h-[300px] lg:max-w-full sm:max-w-[350px] sm:mx-auto rounded-lg bg-cover bg-center cursor-pointer"
            ></div>
          </div>

          <!-- Wreaths -->
          <div
            v-if="filteri.vijenci"
            :class="{ 'animate-fade-in': filteri.vijenci }"
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-[50px]"
          >
            <h1
              class="shadow-[0_0_20px_rgba(255,255,255,0.4)] bg-gradient-to-br from-slate-800 via-slate-900 to-blue-950 flex items-center text-center text-2xl border rounded-xl justify-center"
            >
              {{ t("vijenci") }}
            </h1>
            <div
              v-for="vijenac in vijenci"
              :key="vijenac.filename"
              @click="openModal('vijenci', vijenac)"
              :style="{
                backgroundImage: `url(${require(`@/assets/ponuda_cvijeca/vijenci/${vijenac.filename}`)})`,
              }"
              class="hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-transform hover:scale-105 h-[200px] w-full lg:w-full xl:h-[300px] lg:max-w-full sm:max-w-[350px] sm:mx-auto rounded-lg bg-cover bg-center cursor-pointer"
            ></div>
          </div>

          <!-- Arrangements -->
          <div
            v-if="filteri.aranzmani"
            :class="{ 'animate-fade-in': filteri.aranzmani }"
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-[50px]"
          >
            <h1
              class="shadow-[0_0_20px_rgba(255,255,255,0.4)] bg-gradient-to-br from-slate-800 via-slate-900 to-blue-950 flex items-center text-center text-2xl border rounded-xl justify-center"
            >
              {{ t("arrangements") }}
            </h1>
            <div
              v-for="aranzman in aranzmani"
              :key="aranzman.filename"
              @click="openModal('aranzmani', aranzman)"
              :style="{
                backgroundImage: `url(${require(`@/assets/ponuda_cvijeca/aranzmani/${aranzman.filename}`)})`,
              }"
              class="hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-transform hover:scale-105 h-[200px] w-full lg:w-full xl:h-[300px] lg:max-w-full sm:max-w-[350px] sm:mx-auto rounded-lg bg-cover bg-center cursor-pointer"
            ></div>
          </div>

          <!-- Bouquets -->
          <div
            v-if="filteri.buketi"
            :class="{ 'animate-fade-in': filteri.buketi }"
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-[50px]"
          >
            <h1
              class="shadow-[0_0_20px_rgba(255,255,255,0.4)] bg-gradient-to-br from-slate-800 via-slate-900 to-blue-950 flex items-center text-center text-2xl border rounded-xl justify-center"
            >
              {{ t("bouquet") }}
            </h1>
            <div
              v-for="buketi in buketiAranzmani"
              :key="buketi.filename"
              @click="openModal('buketi', buketi)"
              :style="{
                backgroundImage: `url(${require(`@/assets/ponuda_cvijeca/buketi_i_aranzmani/${buketi.filename}`)})`,
              }"
              class="hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-transform hover:scale-105 h-[200px] w-full lg:w-full xl:h-[300px] lg:max-w-full sm:max-w-[350px] sm:mx-auto rounded-lg bg-cover bg-center cursor-pointer"
            ></div>
          </div>

          <!-- Responsive Modal -->
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
                style="
                  max-width: calc(100vw - 2rem);
                  max-height: calc(100vh - 2rem);
                "
              />
              <button
                @click="closeModal"
                class="absolute top-4 right-4 text-white text-2xl font-bold"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      </div>

      <FooterComponent />
    </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
import FooterComponent from "../components/FooterComponent.vue";
import HeroBanner from "@/components/HeroBanner.vue";
import NavbarComponent from "@/components/NavbarComponent.vue";

export default {
  name: "HomeView",
  components: {
    HeroBanner,
    NavbarComponent,
    FooterComponent,
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
      isMobileMenuOpen: false,
      submenuPonuda: false,
      isModalOpen: false,
      // Instead of using a "currentImage" property, we use these two to know which image to display.
      modalType: null,
      modalImage: null,
      formData: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
      buketiAranzmani: [],
      aranzmani: [],
      vijenci: [],
      cvijece_za_lijes: [],

      filteri: {
        buketi: true,
        aranzmani: true,
        vijenci: true,
        cvijece_za_lijes: true,
      },
    };
  },
  setup() {
    const { t } = useI18n();
    return { t };
  },
  mounted() {
    if (this.filter) {
      this.applyFilter(this.filter);
    }
  },
  computed: {
    currentFilter() {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get("filter");
    },
    currentImageSrc() {
      if (!this.modalImage || !this.modalType) return "";
      // Map the type to the corresponding folder name.
      const folderMapping = {
        cvijece_za_lijes: "cvijece_za_lijes",
        vijenci: "vijenci",
        aranzmani: "aranzmani",
        buketi: "buketi_i_aranzmani",
      };
      const folder = folderMapping[this.modalType];
      try {
        return require(`@/assets/ponuda_cvijeca/${folder}/${this.modalImage.filename}`);
      } catch (error) {
        console.error("Error loading image:", error);
        return "";
      }
    },
  },
  watch: {
    currentFilter(newFilter) {
      this.applyFilter(newFilter);
    },
  },
  created() {
    const buketiAranzmani = require.context(
      "@/assets/ponuda_cvijeca/buketi_i_aranzmani",
      false,
      /\.(png|jpe?g|svg)$/
    );
    this.buketiAranzmani = buketiAranzmani.keys().map((filename) => ({
      filename: filename.slice(2),
      title: filename.slice(2, -4),
      alt: filename.slice(2, -4),
    }));

    const aranzmani = require.context(
      "@/assets/ponuda_cvijeca/aranzmani",
      false,
      /\.(png|jpe?g|svg)$/
    );
    this.aranzmani = aranzmani.keys().map((filename) => ({
      filename: filename.slice(2),
      title: filename.slice(2, -4),
      alt: filename.slice(2, -4),
    }));

    const vijenci = require.context(
      "@/assets/ponuda_cvijeca/vijenci",
      false,
      /\.(png|jpe?g|svg)$/
    );
    this.vijenci = vijenci.keys().map((filename) => ({
      filename: filename.slice(2),
      title: filename.slice(2, -4),
      alt: filename.slice(2, -4),
    }));

    const cvijece_za_lijes = require.context(
      "@/assets/ponuda_cvijeca/cvijece_za_lijes",
      false,
      /\.(png|jpe?g|svg)$/
    );
    this.cvijece_za_lijes = cvijece_za_lijes.keys().map((filename) => ({
      filename: filename.slice(2),
      title: filename.slice(2, -4),
      alt: filename.slice(2, -4),
    }));
  },
  beforeUnmount() {
    document.body.style.overflow = "auto";
  },
  methods: {
    applyFilter(filterArgument) {
      Object.entries(this.filteri).forEach(([key]) => {
        this.filteri[key] = key === filterArgument;
      });
    },
    openModal(type, image) {
      this.modalType = type;
      this.modalImage = image;
      this.isModalOpen = true;
      document.body.style.overflow = "hidden";
    },
    closeModal() {
      this.modalType = null;
      this.modalImage = null;
      this.isModalOpen = false;
      document.body.style.overflow = "auto";
    },
    resetingAllFilters() {
      Object.entries(this.filteri).forEach(([key]) => {
        this.filteri[key] = true;
      });
    },
    filteringTheProducts(filterArgument) {
      Object.entries(this.filteri).forEach(([key]) => {
        this.filteri[key] = key === filterArgument;
      });
      const url = new URL(window.location);
      url.searchParams.set("filter", filterArgument);
      window.history.pushState({}, "", url);
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      document.body.style.overflow = this.isMobileMenuOpen ? "hidden" : "auto";
    },
    toggleSubmenuPonuda() {
      this.submenuPonuda = !this.submenuPonuda;
    },
    redirectToContact() {
      this.$router.push("/contact-melani");
    },
  },
};
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 2s ease-out;
}

.owl-prev,
.owl-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.owl-prev {
  left: -20px;
}
.owl-next {
  right: -20px;
}
</style>
