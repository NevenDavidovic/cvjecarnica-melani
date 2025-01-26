<template>
  <div class="min-h-screen">
    <NavbarComponent :isSectionVisible="isSectionVisible" />

    <HeroBanner
      title="Ponuda cvijeća"
      imageSrc="ponuda-hero.png"
      imageAlt="Ponuda cvijeća"
    />

    <div class="bg-gray-800 text-white pt-8">
      <div class="container mx-auto px-4">
        <h1 class="text-2xl font-normal mb-[50px]">Odaberi</h1>
        <div class="flex flex-wrap justify-center mb-8">
          <button
            @click="resetingAllFilters"
            class="bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded mr-2 mb-2"
          >
            Sve
          </button>
          <button
            @click="filteringTheProducts('aranzmani')"
            :class="{
              'border border-white ': filteri.aranzmani,
            }"
            class="bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded mr-2 mb-2"
          >
            Aranžmani
          </button>

          <button
            @click="filteringTheProducts('vijenci')"
            :class="{
              'border border-white ': filteri.vijenci,
            }"
            class="bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded mr-2 mb-2"
          >
            Vijenci
          </button>

          <button
            @click="filteringTheProducts('cvijece_za_lijes')"
            :class="{
              'border border-white ': filteri.cvijece_za_lijes,
            }"
            class="bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded mr-2 mb-2"
          >
            Cvijeće za lijes
          </button>

          <button
            @click="filteringTheProducts('buketi')"
            :class="{
              'border border-white ': filteri.buketi,
            }"
            class="bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded mr-2 mb-2"
          >
            Buketi
          </button>
          <!-- <button
            @click="filteringTheProducts('valentinovo')"
            :class="{
              'border border-white ': filteri.valentinovo,
            }"
            class="bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded mr-2 mb-2"
          >
            Valentinovo
          </button> -->
          <!-- <button
            @click="filteringTheProducts('umjetno_cvijece')"
            :class="{
              'border border-white ': filteri.umjetno_cvijece,
            }"
            class="bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded mr-2 mb-2"
          >
            Umjetno cvijeće
          </button> -->
          <!-- <button
            @click="filteringTheProducts('bozic')"
            :class="{
              'border border-white ': filteri.bozic,
            }"
            class="bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded mr-2 mb-2"
          >
            Božić
          </button> -->
          <!-- <button
            @click="filteringTheProducts('rezano_cvijece')"
            :class="{
              'border border-white ': filteri.rezano_cvijece,
            }"
            class="bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded mr-2 mb-2"
          >
            Rezano cvijeće
          </button> -->
        </div>

        <!-- <div
          v-if="filteri.rezano_cvijece"
          :class="{
            'animate-fade-in': filteri.rezano_cvijece,
          }"
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-[50px]"
        >
          <div v-for="image in rezanoCvijece" :key="image.filename">
            <img
              class="w-[100%] lg:w-full xl:h-full lg:max-w-full sm:max-w-[350px] sm:mx-auto rounded-lg"
              :src="
                require(`@/assets/ponuda_cvijeca/rezano_cvijece/${image.filename}`)
              "
              alt=""
            />
          </div>
        </div> -->

        <!-- <div
          v-if="filteri.bozic"
          :class="{ 'animate-fade-in': filteri.bozic }"
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-[50px]"
        >
          <div v-for="bozic in bozicCvijece" :key="bozic.filename">
            <img
              class="w-[100%] lg:w-full xl:h-full lg:max-w-full sm:max-w-[350px] sm:mx-auto rounded-lg"
              :src="require(`@/assets/ponuda_cvijeca/bozic/${bozic.filename}`)"
              alt=""
            />
            
          </div>
        </div> -->

        <!-- <div
          v-if="filteri.valentinovo"
          :class="{ 'animate-fade-in': filteri.valentinovo }"
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-[50px]"
        >
          <div
            v-for="valentinovo in valentinovoCvijece"
            :key="valentinovo.filename"
          >
            <img
              class="w-[100%] lg:w-full xl:h-full lg:max-w-full sm:max-w-[350px] sm:mx-auto rounded-lg"
              :src="
                require(`@/assets/ponuda_cvijeca/valentinovo/${valentinovo.filename}`)
              "
              alt=""
            />
            
          </div>
        </div> -->

        <!-- <div
          v-if="filteri.umjetno_cvijece"
          :class="{ 'animate-fade-in': filteri.umjetno_cvijece }"
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-[50px]"
        >
          <div v-for="umjetno in umjetnoCvijece" :key="umjetno.filename">
            <img
              class="w-[100%] lg:w-full xl:h-full lg:max-w-full sm:max-w-[350px] sm:mx-auto rounded-lg"
              :src="
                require(`@/assets/ponuda_cvijeca/umjetno_cvijece/${umjetno.filename}`)
              "
              alt=""
            />
           
          </div>
        </div> -->

        <div>
          <!-- Cvijece za lijes -->
          <div
            v-if="filteri.cvijece_za_lijes"
            :class="{ 'animate-fade-in': filteri.cvijece_za_lijes }"
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-[50px]"
          >
            <div
              v-for="cvijece in cvijece_za_lijes"
              :key="cvijece.filename"
              @click="openModal('cvijece_za_lijes', cvijece)"
              :style="{
                backgroundImage: `url(${require(`@/assets/ponuda_cvijeca/cvijece_za_lijes/${cvijece.filename}`)})`,
              }"
              class="h-[200px] w-[100%] lg:w-full xl:h-[300px] lg:max-w-full sm:max-w-[350px] sm:mx-auto rounded-lg bg-cover bg-center cursor-pointer"
            ></div>
          </div>

          <!-- Vijenci -->
          <div
            v-if="filteri.vijenci"
            :class="{ 'animate-fade-in': filteri.vijenci }"
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-[50px]"
          >
            <div
              v-for="vijenac in vijenci"
              :key="vijenac.filename"
              @click="openModal('vijenci', vijenac)"
              :style="{
                backgroundImage: `url(${require(`@/assets/ponuda_cvijeca/vijenci/${vijenac.filename}`)})`,
              }"
              class="h-[200px] w-[100%] lg:w-full xl:h-[300px] lg:max-w-full sm:max-w-[350px] sm:mx-auto rounded-lg bg-cover bg-center cursor-pointer"
            ></div>
          </div>

          <!-- Aranzmani -->
          <div
            v-if="filteri.aranzmani"
            :class="{ 'animate-fade-in': filteri.aranzmani }"
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-[50px]"
          >
            <div
              v-for="aranzman in aranzmani"
              :key="aranzman.filename"
              @click="openModal('aranzmani', aranzman)"
              :style="{
                backgroundImage: `url(${require(`@/assets/ponuda_cvijeca/aranzmani/${aranzman.filename}`)})`,
              }"
              class="h-[200px] w-[100%] lg:w-full xl:h-[300px] lg:max-w-full sm:max-w-[350px] sm:mx-auto rounded-lg bg-cover bg-center cursor-pointer"
            ></div>
          </div>

          <!-- Buketi -->
          <div
            v-if="filteri.buketi"
            :class="{ 'animate-fade-in': filteri.buketi }"
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-[50px]"
          >
            <div
              v-for="buketi in buketiAranzmani"
              :key="buketi.filename"
              @click="openModal('buketi', buketi)"
            >
              <img
                class="w-[100%] lg:w-full xl:h-full lg:max-w-full sm:max-w-[350px] sm:mx-auto rounded-lg cursor-pointer"
                :src="
                  require(`@/assets/ponuda_cvijeca/buketi_i_aranzmani/${buketi.filename}`)
                "
                alt=""
              />
            </div>
          </div>

          <!-- Modal -->
          <div
            v-if="isModalOpen"
            class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          >
            <div class="relative w-[90%] max-w-4xl">
              <button
                @click="closeModal"
                class="absolute top-4 right-4 text-white text-2xl font-bold"
              >
                ✕
              </button>
              <img
                :src="currentImage"
                alt="Full-screen image"
                class="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <FooterComponent />
    </div>
  </div>
</template>

<script>
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
      currentImage: null,
      formData: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
      //rezanoCvijeće: [],
      //bozicCvijece: [],
      //valentinovoCvijece: [],
      //umjetnoCvijece: [],
      buketiAranzmani: [],
      aranzmani: [],
      vijenci: [],
      cvijece_za_lijes: [],

      filteri: {
        //bozic: true,
        //rezano_cvijece: true,
        //valentinovo: true,
        //umjetno_cvijece: true,
        buketi: true,
        aranzmani: true,
        vijenci: true,
        cvijece_za_lijes: true,
      },
    };
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

    // const umjetnoCvijece = require.context(
    //   "@/assets/ponuda_cvijeca/umjetno_cvijece",
    //   false,
    //   /\.(png|jpe?g|svg)$/
    // );
    // this.umjetnoCvijece = umjetnoCvijece.keys().map((filename) => ({
    //   filename: filename.slice(2),
    //   title: filename.slice(2, -4),
    //   alt: filename.slice(2, -4),
    // }));

    // const valentinovoCvijece = require.context(
    //   "@/assets/ponuda_cvijeca/valentinovo",
    //   false,
    //   /\.(png|jpe?g|svg)$/
    // );
    // this.valentinovoCvijece = valentinovoCvijece.keys().map((filename) => ({
    //   filename: filename.slice(2),
    //   title: filename.slice(2, -4),
    //   alt: filename.slice(2, -4),
    // }));

    // const rezanoCvijece = require.context(
    //   "@/assets/ponuda_cvijeca/rezano_cvijece",
    //   false,
    //   /\.(png|jpe?g|svg)$/
    // );
    // this.rezanoCvijece = rezanoCvijece.keys().map((filename) => ({
    //   filename: filename.slice(2),
    //   title: filename.slice(2, -4),
    //   alt: filename.slice(2, -4),
    // }));

    // const bozicCvijece = require.context(
    //   "@/assets/ponuda_cvijeca/bozic",
    //   false,
    //   /\.(png|jpe?g|svg)$/
    // );

    // this.bozicCvijece = bozicCvijece.keys().map((filename) => ({
    //   filename: filename.slice(2),
    //   title: filename.slice(2, -4),
    //   alt: filename.slice(2, -4),
    // }));
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
    openModal(category, item) {
      const basePaths = {
        cvijece_za_lijes: "@/assets/ponuda_cvijeca/cvijece_za_lijes/",
        vijenci: "@/assets/ponuda_cvijeca/vijenci/",
        aranzmani: "@/assets/ponuda_cvijeca/aranzmani/",
        buketi: "@/assets/ponuda_cvijeca/buketi_i_aranzmani/",
      };

      try {
        // Dynamically resolve the image path
        this.currentImage = require(`${basePaths[category]}${item.filename}`);
        this.isModalOpen = true;
      } catch (error) {
        console.error(
          `Error loading image: ${basePaths[category]}${item.filename}`,
          error
        );
        this.currentImage = ""; // Fallback to empty string if image not found
        this.isModalOpen = false;
      }
    },

    closeModal() {
      this.isModalOpen = false;
      this.currentImage = null;
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
      // Optionally update the URL to reflect the new filter
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

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s;
}
.modal-enter,
.modal-leave-to {
  opacity: 0;
}
</style>
