<template>
  <div class="min-h-screen">
    <!-- Navigation -->
    <NavbarComponent :isSectionVisible="isSectionVisible" />

    <HeroBanner
      :title="t('pogrebna_ponuda')"
      imageSrc="banner-ponuda-pogrebno.jpg"
      imageAlt="Pogrebne usluge - ponuda"
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
            @click="filteringTheProducts('lijesovi')"
            :class="{
              'border border-white ': filteri.lijesovi,
            }"
            class="bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded mr-2 mb-2"
          >
            {{ t("coffins_offer") }}
          </button>
          <button
            @click="filteringTheProducts('lampioni')"
            :class="{
              'border border-white ': filteri.lampioni,
            }"
            class="bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded mr-2 mb-2"
          >
            {{ t("funeral_equipment") }}
          </button>
          <button
            @click="filteringTheProducts('prijevoz_pokojnika')"
            :class="{
              'border border-white ': filteri.prijevoz_pokojnika,
            }"
            class="bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded mr-2 mb-2"
          >
            {{ t("prijevoz_pokojnika") }}
          </button>
        </div>

        <div class="bg-white rounded-xl">
          <div
            v-if="filteri.lijesovi"
            :class="{
              'animate-fade-in': filteri.lijesovi,
            }"
          >
            <ProductListComponent />
          </div>

          <div
            v-if="filteri.prijevoz_pokojnika"
            :class="{ 'animate-fade-in': filteri.prijevoz_pokojnika }"
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-[50px] mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 bg-white"
          >
            <div
              v-for="image in prijevoz"
              :key="image.filename"
              :style="{
                backgroundImage: `url(${require(`@/assets/ponuda_pogrebno/prijevoz_pokojnika/${image.filename}`)})`,
              }"
              class="hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-transform hover:scale-105 h-[200px] w-[100%] lg:w-full xl:h-[300px] lg:max-w-full sm:max-w-[350px] sm:mx-auto rounded-lg bg-cover bg-center cursor-pointer"
            >
              <!-- <h3 v-if="image.title">{{ image.title }}</h3> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <FooterComponent />
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
import ProductListComponent from "@/components/ProductListComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import NavbarComponent from "@/components/NavbarComponent.vue";
import HeroBanner from "@/components/HeroBanner.vue";

export default {
  name: "PonudaPogrebno",
  components: {
    FooterComponent,
    ProductListComponent,
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

      formData: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
      lijesoviPonuda: [],
      urnePonuda: [],
      lampioniPonuda: [],
      prijevoz: [],

      filteri: {
        lijesovi: true,
        pogrebna_oprema: true,
        prijevoz_pokojnika: true,
        kremiranje: true,
      },
    };
  },
  setup() {
    const { t } = useI18n(); // Get translation function
    return { t }; // Return t() so it can be used in the template
  },

  mounted() {
    if (this.filter) {
      this.applyFilter(this.filter);
    }
  },
  created() {
    const lampioniPonuda = require.context(
      "@/assets/ponuda_pogrebno/lampioni",
      false,
      /\.(png|jpe?g|svg)$/
    );
    this.lampioniPonuda = lampioniPonuda.keys().map((filename) => ({
      filename: filename.slice(2),
      title: filename.slice(2, -4),
      alt: filename.slice(2, -4),
    }));

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

    const urnePonuda = require.context(
      "@/assets/ponuda_pogrebno/urne",
      false,
      /\.(png|jpe?g|svg)$/
    );
    this.urnePonuda = urnePonuda.keys().map((filename) => ({
      filename: filename.slice(2),
      title: filename.slice(2, -4),
      alt: filename.slice(2, -4),
    }));

    const rezanoCvijece = require.context(
      "@/assets/ponuda_cvijeca/rezano_cvijece",
      false,
      /\.(png|jpe?g|svg)$/
    );
    this.rezanoCvijece = rezanoCvijece.keys().map((filename) => ({
      filename: filename.slice(2),
      title: filename.slice(2, -4),
      alt: filename.slice(2, -4),
    }));

    const bozicCvijece = require.context(
      "@/assets/ponuda_cvijeca/bozic",
      false,
      /\.(png|jpe?g|svg)$/
    );

    this.bozicCvijece = bozicCvijece.keys().map((filename) => ({
      filename: filename.slice(2),
      title: filename.slice(2, -4),
      alt: filename.slice(2, -4),
    }));
  },

  beforeUnmount() {
    document.body.style.overflow = "auto"; // Reset overflow
  },
  methods: {
    applyFilter(filterArgument) {
      Object.entries(this.filteri).forEach(([key]) => {
        this.filteri[key] = key === filterArgument;
      });
    },
    resetingAllFilters() {
      Object.entries(this.filteri).forEach(([key]) => {
        this.filteri[key] = true;
      });
    },
    filteringTheProducts(filterArgument) {
      Object.entries(this.filteri).forEach(([key]) => {
        if (key === filterArgument) {
          this.filteri[key] = true;
        } else {
          this.filteri[key] = false;
        }
      });
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

/* Animation class */
.animate-fade-in {
  animation: fadeIn 2s ease-out;
}
/* Optional: Custom styling for navigation */
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
