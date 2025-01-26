<template>
  <div class="min-h-screen">
    <NavbarComponent :isSectionVisible="isSectionVisible" />

    <HeroBanner
      title="Prijevoz pokojnika"
      description="0-24 na brojeve telefona: 
            +385 92 199 2352 / +385 91 630 9966"
      imageSrc="prijevoz-pogrebno.jpg"
      imageAlt="Prijevoz pokojnika"
    />

    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center my-[50px] lg:my-[100px]"
    >
      <!-- Left Column: Text -->
      <div>
        <h2 class="text-4xl font-bold text-gray-800 mb-4">
          Prijevoz pokojnika
        </h2>
        <p class="text-lg text-gray-600 mb-6">
          U trenucima kad gubimo voljenu osobu najvažnije je imati nekoga tko će
          nas razumjeti, podržati i diskretno brinuti o svim detaljima
          ispraćaja. Miraj je ovdje da Vam olakša te teške dane i pomogne Vam da
          se s dužnom pažnjom, ljubavlju i pijetetom oprostite od onih koje
          volite.
        </p>
        <p class="text-lg text-gray-600 mb-6">
          Naše osoblje osigurava diskretan, siguran i profesionalan prijevoz
          pokojnika iz bolnice, doma ili bilo kojeg mjesta s kojeg je potrebno
          obaviti prijevoz, bez obzira na udaljenost i granice.
        </p>
        <p class="text-lg text-gray-600 mb-6">
          Brinemo do najsitnijih pojedinosti o svim pogrebnim formalnostima,
          uključujući administrativne procese, pribavljanje dokumentacije i
          dozvola koje je potrebno imati.
        </p>
        <div class="flex space-x-4">
          <a
            href="/sto-uciniti-u-slucaju-smrtnog-slucaja"
            class="px-6 py-3 bg-primary text-whitesmoke rounded-lg"
          >
            Što učiniti u slučaju smrtnog slučaja
          </a>
          <a
            href="tel:+385 92 199 2352"
            class="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary-100 flex items-center"
          >
            Nazovi
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

    <div class="bg-gray-800">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-[50px] mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 bg-gray-800 rounded-xl"
      >
        <div v-for="image in prijevoz" :key="image.filename">
          <img
            class="w-[100%] lg:w-full xl:h-full lg:max-w-full sm:max-w-[350px] sm:mx-auto rounded-xl"
            :src="
              require(`@/assets/ponuda_pogrebno/prijevoz_pokojnika/${image.filename}`)
            "
          />
        </div>
      </div>
    </div>

    <FooterComponent />
  </div>
</template>

<script>
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

  mounted() {},
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

  beforeUnmount() {
    document.body.style.overflow = "auto"; // Reset overflow
  },
  methods: {},
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
