<template>
  <div class="min-h-screen">
    <NavbarComponent :isSectionVisible="isSectionVisible" />

    <section class="py-24 bg-gray-800">
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center"
      >
        <div class="relative">
          <div class="rounded-full border-4 border-gray-300 overflow-hidden">
            <img
              src="../assets/images/postupak-kod-smrti.jpg"
              :alt="t('angel_statue_alt')"
              class="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div>
          <h5 class="text-lg font-semibold text-primary uppercase mb-2">
            {{ t("funeral_services_melani") }}
          </h5>
          <h2 class="text-4xl font-bold text-white mb-6">
            {{ t("death_case_procedure") }}
          </h2>
          <p class="text-lg text-white mb-6">
            {{ t("death_procedure_step_1") }}
          </p>
          <p class="text-lg text-white mb-6">
            {{ t("death_procedure_step_2") }}
          </p>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-50">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="text-xl text-gray-600 mb-12">
          {{ t("different_death_cases") }}
        </p>
        <div class="space-y-4">
          <div class="border rounded-lg">
            <button
              @click="toggle(1)"
              class="flex justify-between items-center w-full px-6 py-4 text-lg font-medium text-left text-gray-800 focus:outline-none"
            >
              <span>{{ t("home_death_case") }}</span>
              <span
                :class="openIndex === 1 ? 'rotate-45' : 'rotate-0'"
                class="transform transition-transform duration-300"
                >+</span
              >
            </button>
            <div v-if="openIndex === 1" class="px-6 py-4 text-gray-600">
              <p>{{ t("home_death_case_description") }}</p>
            </div>
          </div>

          <div class="border rounded-lg">
            <button
              @click="toggle(2)"
              class="flex justify-between items-center w-full px-6 py-4 text-lg font-medium text-left text-gray-800 focus:outline-none"
            >
              <span>{{ t("hospital_death_case") }}</span>
              <span
                :class="openIndex === 2 ? 'rotate-45' : 'rotate-0'"
                class="transform transition-transform duration-300"
                >+</span
              >
            </button>
            <div v-if="openIndex === 2" class="px-6 py-4 text-gray-600">
              <p>{{ t("hospital_death_case_description") }}</p>
            </div>
          </div>

          <div class="border rounded-lg">
            <button
              @click="toggle(3)"
              class="flex justify-between items-center w-full px-6 py-4 text-lg font-medium text-left text-gray-800 focus:outline-none"
            >
              <span>{{ t("abroad_death_case") }}</span>
              <span
                :class="openIndex === 3 ? 'rotate-45' : 'rotate-0'"
                class="transform transition-transform duration-300"
                >+</span
              >
            </button>
            <div v-if="openIndex === 3" class="px-6 py-4 text-gray-600">
              <p>{{ t("abroad_death_case_description") }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <FooterComponent />
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
import NavbarComponent from "@/components/NavbarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "DeathProcedure",
  components: {
    NavbarComponent,
    FooterComponent,
  },
  data() {
    return {
      openIndex: null,
    };
  },
  setup() {
    const { t } = useI18n();
    return { t };
  },
  methods: {
    toggle(index) {
      this.openIndex = this.openIndex === index ? null : index;
    },
  },
};
</script>
