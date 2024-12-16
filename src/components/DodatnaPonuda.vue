<template>
  <section class="bg-bg_primary py-20 lg:py-52 px-4">
    <!-- Container -->
    <div class="container mx-auto">
      <!-- Heading -->
      <h2
        class="text-cyan-300 text-[28px] sm:text-[40px] text-center mb-8 font-jacques"
      >
        DODATNA PONUDA
      </h2>

      <!-- Description -->
      <p
        class="text-white text-center mb-12 max-w-3xl mx-auto text-[18px] sm:text-[28px] font-jacques"
      >
        Bilo da tražite elegantan buket za posebnu priliku, unikatni cvjetni
        aranžman ili mali znak pažnje, kod nas ćete pronaći savršen izbor.
      </p>

      <!-- Cards Container -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-[50px] lg:gap-20">
        <!-- Card 1 -->
        <div
          class="bg-blue-50 rounded-lg p-12 flex flex-col items-center text-center"
        >
          <h3 class="text-gray-800 text-xl font-semibold mb-4 font-jacques">
            ORGANIZIRANJE GLAZBE
          </h3>
          <p class="text-gray-600 mb-6 font-jacques">
            Usluga od organiziranja glazbe za potrebe priredba.
          </p>
          <button
            @click="redirectToContact"
            class="w-[200px] font-jacques bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-6 py-2 rounded-md font-medium"
          >
            KONTAKTIRAJ NAS
          </button>
        </div>

        <!-- Card 2 -->
        <div
          class="bg-blue-50 rounded-lg p-12 flex flex-col items-center text-center font-jacques"
        >
          <h3 class="text-gray-800 text-xl font-semibold mb-4">
            CVIJEĆE ZA EVENTE
          </h3>
          <p class="text-gray-600 mb-6">
            Naša usluga uključuje izradu vijenaca, buketa i drugih cvjetnih
            dekoracija prilagođenih vašim potrebama.
          </p>
          <button
            class="w-[200px] bg-cyan-300 hover:bg-cyan-400 text-gray-800 px-6 py-2 rounded-md font-medium"
          >
            POGLEDAJ PONUDU
          </button>
        </div>

        <!-- Card 3 -->
        <div
          class="bg-blue-50 rounded-lg p-12 flex flex-col items-center text-center font-jacques"
        >
          <h3 class="text-gray-800 text-xl font-semibold mb-4">
            PONUDA LIJESOVA
          </h3>
          <p class="text-gray-600 mb-6">
            Želite samo odrediti proizvod ili neku od naših pogrebnih usluga?
            Stojimo Vam na raspolaganju za sve Vaše upite.
          </p>
          <button
            class="w-[200px] bg-cyan-300 hover:bg-cyan-400 text-gray-800 px-6 py-2 rounded-md font-medium"
          >
            POGLEDAJ PONUDU
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "DodatnaPonuda",
  components: {},
  data() {
    return {
      isSectionVisible: false,
      isMobileMenuOpen: false,
    };
  },

  methods: {
    redirectToContact() {
      // Use this.$router to navigate
      this.$router.push("/contact-melani");
    },
    redirectToCvjecarnica() {
      this.$router.push("/cvjecarnica-melani");
    },
    redirectToPogrebno() {
      this.$router.push("/pogrebne-usluge");
    },
  },
};
</script>
