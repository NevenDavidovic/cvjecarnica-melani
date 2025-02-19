<template>
  <div class="min-h-screen">
    <NavbarComponent :isSectionVisible="isSectionVisible" />
    <div ref="section1">
      <HeroBanner
        :title="currentTitle"
        :description="currentDescription"
        :imageSrc="currentImageBannerSrc"
        imageAlt="Ponuda cvijeća"
      />
    </div>

    <div class="bg-gray-800 text-white pt-8">
      <div class="container mx-auto px-4">
        <h1 class="text-2xl font-normal mb-[50px]">{{ t("categories") }}</h1>
        <div
          class="flex flex-wrap justify-center mb-8 gap-2 group/btnContainer"
        >
          <button
            v-for="btn in [
              { id: 'all', label: t('all') },
              { id: 'aranzmani', label: t('arrangements') },
              { id: 'vijenci', label: t('vijenci') },
              { id: 'cvijece_za_lijes', label: t('coffin_flowers') },
              { id: 'buketi', label: t('bouquet') },
              { id: 'loncanice', label: t('loncanice') },
            ]"
            :key="btn.id"
            @click="
              btn.id === 'all'
                ? resetingAllFilters()
                : filteringTheProducts(btn.id)
            "
            class="relative overflow-hidden px-6 py-2.5 text-sm font-medium transition-all duration-400 rounded-xl"
            :class="{
              'text-white bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-100':
                (btn.id === 'all' && Object.values(filteri).every((v) => !v)) ||
                filteri[btn.id],
              'text-gray-600 bg-gray-100 hover:bg-gray-50': !(
                (btn.id === 'all' && Object.values(filteri).every((v) => !v)) ||
                filteri[btn.id]
              ),
            }"
          >
            <span class="relative z-10">
              {{ btn.label }}
            </span>
            <div
              class="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-indigo-100/30 to-purple-100/30 hover:opacity-100"
            ></div>
            <div
              v-if="
                (btn.id === 'all' && Object.values(filteri).every((v) => !v)) ||
                filteri[btn.id]
              "
              class="absolute inset-0 border-2 border-white/20 rounded-xl animate-border-pulse"
            ></div>
          </button>
        </div>

        <div>
          <div
            v-if="filteri.cvijece_za_lijes"
            :class="{ 'animate-fade-in': filteri.cvijece_za_lijes }"
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-[50px]"
          >
            <h1
              class="min-h-[100px] shadow-[0_0_20px_rgba(255,255,255,0.4)] bg-gradient-to-br from-slate-800 via-slate-900 to-blue-950 flex items-center text-center text-2xl border rounded-xl justify-center"
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
          <div
            v-if="filteri.vijenci"
            :class="{ 'animate-fade-in': filteri.vijenci }"
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-[50px]"
          >
            <h1
              class="min-h-[100px] shadow-[0_0_20px_rgba(255,255,255,0.4)] bg-gradient-to-br from-slate-800 via-slate-900 to-blue-950 flex items-center text-center text-2xl border rounded-xl justify-center"
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
          <div
            v-if="filteri.aranzmani"
            :class="{ 'animate-fade-in': filteri.aranzmani }"
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-[50px]"
          >
            <h1
              class="min-h-[100px] shadow-[0_0_20px_rgba(255,255,255,0.4)] bg-gradient-to-br from-slate-800 via-slate-900 to-blue-950 flex items-center text-center text-2xl border rounded-xl justify-center"
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
          <div
            v-if="filteri.buketi"
            :class="{ 'animate-fade-in': filteri.buketi }"
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-[50px]"
          >
            <h1
              class="min-h-[100px] shadow-[0_0_20px_rgba(255,255,255,0.4)] bg-gradient-to-br from-slate-800 via-slate-900 to-blue-950 flex items-center text-center text-2xl border rounded-xl justify-center"
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

          <div
            v-if="filteri.loncanice"
            :class="{ 'animate-fade-in': filteri.loncanice }"
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-[50px]"
          >
            <h1
              class="min-h-[100px] shadow-[0_0_20px_rgba(255,255,255,0.4)] bg-gradient-to-br from-slate-800 via-slate-900 to-blue-950 flex items-center text-center text-2xl border rounded-xl justify-center"
            >
              {{ t("loncanice") }}
            </h1>
            <div
              v-for="loncanica in loncanice"
              :key="loncanica.filename"
              @click="openModal('loncanice', loncanica)"
              :style="{
                backgroundImage: `url(${require(`@/assets/ponuda_cvijeca/loncanice/${loncanica.filename}`)})`,
              }"
              class="hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-transform hover:scale-105 h-[200px] w-full lg:w-full xl:h-[300px] lg:max-w-full sm:max-w-[350px] sm:mx-auto rounded-lg bg-cover bg-center cursor-pointer"
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
      isSectionVisible: true,
      isMobileMenuOpen: false,
      submenuPonuda: false,
      isModalOpen: false,
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
      loncanice: [],

      filteri: {
        buketi: true,
        aranzmani: true,
        vijenci: true,
        cvijece_za_lijes: true,
        loncanice: true,
      },
    };
  },
  setup() {
    const { t } = useI18n();
    return { t };
  },

  mounted() {
    this.initIntersectionObserver();
    if (this.filter) {
      this.applyFilter(this.filter);
    }
    this.applyFilter(this.$route.query.filter);
  },
  computed: {
    currentTitle() {
      switch (this.filter) {
        case "buketi":
          return this.t("bouquet");
        case "aranzmani":
          return this.t("arrangements");
        case "vijenci":
          return this.t("vijenci");
        case "cvijece_za_lijes":
          return this.t("coffin_flowers");
        case "loncanice":
          return this.t("loncanice");
        default:
          return this.t("ponuda_cvijeca");
      }
    },
    currentDescription() {
      switch (this.filter) {
        case "buketi":
          return this.t("bouquet_making_description");
        case "aranzmani":
          return this.t("flower_service");
        case "vijenci":
          return this.t("wreath_making_description");
        case "cvijece_za_lijes":
          return this.t("coffin_flowers_description");
        case "loncanice":
          return this.t("loncanice_desc");
        default:
          return this.t("arrangements_description");
      }
    },
    currentImageBannerSrc() {
      switch (this.$route.query.filter) {
        case "buketi":
          return "buketi-banner.jpg";
        case "aranzmani":
          return "aranzmani-banner.jpg";
        case "vijenci":
          return "vijenci-banner.jpg";
        case "cvijece_za_lijes":
          return "cvijece-za-lijes-banner.jpg";
        case "loncanice":
          return "loncanice-banner.jpg";
        default:
          return "ponuda-hero.jpg";
      }
    },
    currentImageSrc() {
      if (!this.modalImage || !this.modalType) return "";
      const folderMapping = {
        cvijece_za_lijes: "cvijece_za_lijes",
        vijenci: "vijenci",
        aranzmani: "aranzmani",
        buketi: "buketi_i_aranzmani",
        loncanice: "loncanice",
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
    "$route.query.filter": {
      handler(newFilter) {
        this.applyFilter(newFilter || null); // Pass null if no filter is set
      },
      immediate: true,
    },
  },
  created() {
    const loncanice = require.context(
      "@/assets/ponuda_cvijeca/loncanice",
      false,
      /\.(png|jpe?g|svg)$/
    );
    this.loncanice = loncanice.keys().map((filename) => ({
      filename: filename.slice(2),
      title: filename.slice(2, -4),
      alt: filename.slice(2, -4),
    }));

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
    initIntersectionObserver() {
      const section = this.$refs.section1;

      if (!section) {
        console.error("Section1 not found");
        return;
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          this.isSectionVisible = entry.isIntersecting;
        });
      });

      observer.observe(section);
    },
    applyFilter(filterArgument) {
      if (!filterArgument) {
        // If no filter is provided, reset all filters
        Object.keys(this.filteri).forEach((key) => {
          this.filteri[key] = true;
        });
      } else {
        // Otherwise, apply the selected filter
        Object.entries(this.filteri).forEach(([key]) => {
          this.filteri[key] = key === filterArgument;
        });
      }
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
      Object.keys(this.filteri).forEach((key) => {
        this.filteri[key] = true; // Enable all filters
      });

      // Remove filter from URL
      const url = new URL(window.location);
      url.searchParams.delete("filter");
      window.history.pushState({}, "", url);

      // Reset filter in Vue Router
      this.$router.replace({ query: {} });

      // Apply filter to show all products
      this.applyFilter(null);
    },
    filteringTheProducts(filterArgument) {
      Object.entries(this.filteri).forEach(([key]) => {
        this.filteri[key] = key === filterArgument;
      });

      // Update the filter in the URL
      const url = new URL(window.location);
      url.searchParams.set("filter", filterArgument);
      window.history.pushState({}, "", url);

      // Update filter prop so HeroBanner updates dynamically
      this.$router.replace({ query: { filter: filterArgument } });
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
