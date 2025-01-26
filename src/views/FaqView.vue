<template>
  <div class="min-h-screen">
    <NavbarComponent :isSectionVisible="isSectionVisible" />

    <section class="py-24 bg-gray-800">
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center"
      >
        <!-- Left Column: Image -->
        <div class="relative">
          <div class="rounded-full border-4 border-gray-300 overflow-hidden">
            <img
              src="../assets/images/postupak-kod-smrti.jpg"
              alt="Angel statue"
              class="w-full h-auto object-cover"
            />
          </div>
        </div>

        <!-- Right Column: Content -->
        <div>
          <h5 class="text-lg font-semibold text-primary uppercase mb-2">
            POGREBNE USLUGE MELANI
          </h5>
          <h2 class="text-4xl font-bold text-white mb-6">
            Kako postupati kada se dogodi smrtni slučaj?
          </h2>
          <p class="text-lg text-white mb-6">
            Pozovite policiju na broj 192, a uskoro će pristupiti medicinska
            ekipa ili mrtvozornik, koji će zatražiti uvid u medicinsku
            dokumentaciju i povijest bolesti preminule osobe, te izdati potrebne
            dozvole za ukop i transport tijela.
          </p>
          <p class="text-lg text-white mb-6">
            Nakon što mrtvozornik završi svoj posao, slobodno nam se obratite za
            dogovor o preuzimanju tijela i organizaciji posljednjeg ispraćaja.
            Naša usluga dostupna je 24 sata dnevno, svih 365 dana u godini. Ako
            je smrt nastupila pod sumnjivim okolnostima, važno je ostaviti
            tijelo i prostor netaknutima radi eventualnog policijskog očevida.
          </p>
          <div class="flex space-x-4"></div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-50">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="text-xl text-gray-600 mb-12">
          Smrtni slučajevi u različitim uvjetima
        </p>
        <div class="space-y-4">
          <!-- Smrtni slučaj u kući ili stanu -->
          <div class="border rounded-lg">
            <button
              @click="toggle(1)"
              class="flex justify-between items-center w-full px-6 py-4 text-lg font-medium text-left text-gray-800 focus:outline-none"
            >
              <span>Smrtni slučaj u kući ili stanu</span>
              <span
                :class="openIndex === 1 ? 'rotate-45' : 'rotate-0'"
                class="transform transition-transform duration-300"
                >+</span
              >
            </button>
            <div v-if="openIndex === 1" class="px-6 py-4 text-gray-600">
              <p>
                U slučaju smrti osobe kod kuće, prvo je potrebno obavijestiti
                policiju na broj 192. Nakon toga, dolazi medicinska ekipa ili
                mrtvozornik, koji će pregledati povijest bolesti i medicinsku
                dokumentaciju preminule osobe te izdati potrebne dozvole za ukop
                i prijevoz pokojnika. Nakon što mrtvozornik obavi svoj dio,
                možete nam se obratiti za organizaciju preuzimanja tijela,
                prijevoza i svih detalja vezanih uz posljednji ispraćaj. Naša
                služba vam je dostupna 24 sata dnevno, svaki dan u godini. Ako
                je smrt nastupila pod sumnjivim okolnostima, važno je ne dirati
                tijelo ni prostor kako bi se omogućio policijski očevid.
              </p>
            </div>
          </div>

          <!-- Smrtni slučaj u bolnici -->
          <div class="border rounded-lg">
            <button
              @click="toggle(2)"
              class="flex justify-between items-center w-full px-6 py-4 text-lg font-medium text-left text-gray-800 focus:outline-none"
            >
              <span>Smrtni slučaj u bolnici</span>
              <span
                :class="openIndex === 2 ? 'rotate-45' : 'rotate-0'"
                class="transform transition-transform duration-300"
                >+</span
              >
            </button>
            <div v-if="openIndex === 2" class="px-6 py-4 text-gray-600">
              <p>
                Nakon što vas bolnica obavijesti o smrti, možete nam se obratiti
                za preuzimanje tijela i organizaciju daljnjih postupaka,
                uključujući otpremu odjeće preminulog na odjel patologije ili
                mrtvačnicu. Na raspolaganju smo vam za dogovor oko pogreba i
                svih potrebnih aranžmana. Naša usluga je dostupna 24 sata dnevno
                tijekom cijele godine.
              </p>
            </div>
          </div>

          <!-- Smrtni slučaj u inozemstvu -->
          <div class="border rounded-lg">
            <button
              @click="toggle(3)"
              class="flex justify-between items-center w-full px-6 py-4 text-lg font-medium text-left text-gray-800 focus:outline-none"
            >
              <span>Smrtni slučaj u inozemstvu</span>
              <span
                :class="openIndex === 3 ? 'rotate-45' : 'rotate-0'"
                class="transform transition-transform duration-300"
                >+</span
              >
            </button>
            <div v-if="openIndex === 3" class="px-6 py-4 text-gray-600">
              <p>
                Ako vaša obitelj želi prevesti tijelo preminule osobe ili
                ekshumirane ostatke iz inozemstva u Hrvatsku radi pogreba, mi
                ćemo organizirati cijeli postupak, uključujući pribavljanje svih
                potrebnih dokumenata.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <FooterComponent />>
  </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "StoUcitiniti",
  components: {
    NavbarComponent,
    FooterComponent,
  },
  data() {
    return {
      openIndex: null,
      // Track which question is open
    };
  },
  methods: {
    toggle(index) {
      this.openIndex = this.openIndex === index ? null : index;
    },
  },
};
</script>

<style>
/* Custom styles for transition (if needed) */
</style>
