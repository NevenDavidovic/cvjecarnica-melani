<template>
  <div class="min-h-screen bg-gray-100 text-gray-900">
    <NavbarComponent :isSectionVisible="isSectionVisible" />

    <section
      ref="section1"
      class="relative flex flex-col items-center justify-center min-h-screen text-center px-6"
    >
      <!-- Overlay with 70% Darkness -->
      <div class="absolute inset-0 bg-black/70 z-10"></div>

      <!-- Background Image -->
      <img
        src="../assets/images/kremiranje-img.jpg"
        alt="Cremation Services"
        class="absolute inset-0 w-full h-full object-cover"
      />

      <!-- Content (Title & Text) -->
      <h1
        ref="heroTitle"
        class="relative z-20 text-5xl font-normal text-white opacity-0 transform translate-y-10 transition-all duration-1000"
      >
        {{ t("uvod_usluga_kremiranja") }}
      </h1>
      <p
        ref="heroSubtitle"
        class="relative z-20 text-lg text-gray-300 mt-4 max-w-2xl opacity-0 transform translate-y-10 transition-all duration-1000 delay-200"
      >
        {{ t("cremation_description_2") }}
      </p>
    </section>

    <section class="py-24 px-6 bg-white">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-4xl font-light text-gray-800 mb-6">
          {{ t("required_documents") }}
        </h2>
        <p class="text-lg text-gray-600 leading-relaxed mb-12">
          {{ t("required_documents_info") }}
        </p>

        <div class="space-y-6">
          <div
            v-for="doc in ['death_certificate', 'burial_permit', 'personal_id']"
            :key="doc"
            class="flex items-center py-6 border-b border-gray-200 hover:bg-gray-50 transition-all duration-300 justify-center"
          >
            <div
              class="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-gray-200"
            >
              <span class="w-2 h-2 bg-gray-400 rounded-full"></span>
            </div>
            <span
              class="text-xl text-gray-600 ml-4 transition-all duration-300 hover:text-black"
              >{{ t(doc) }}</span
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Section: Closing Note -->
    <section class="py-24 px-6 bg-gray-200">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-4xl font-light text-gray-800 mb-6">
          {{ t("closing_note") }}
        </h2>
        <p class="text-lg text-gray-600 leading-relaxed">
          {{ t("post_cremation") }}
        </p>
      </div>
    </section>

    <FooterComponent />
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
import FooterComponent from "../components/FooterComponent.vue";
import NavbarComponent from "@/components/NavbarComponent.vue";
import { ref, onMounted, nextTick } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default {
  name: "CremationView",
  components: {
    FooterComponent,
    NavbarComponent,
  },
  data() {
    return {
      isSectionVisible: true,
    };
  },
  setup() {
    const { t } = useI18n();
    const heroTitle = ref(null);
    const heroSubtitle = ref(null);

    onMounted(() => {
      gsap.registerPlugin(ScrollTrigger);

      nextTick(() => {
        // Hero Section Animation
        gsap.to(heroTitle.value, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        });
        gsap.to(heroSubtitle.value, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          delay: 0.2,
        });
      });
    });

    return {
      t,
      heroTitle,
      heroSubtitle,
    };
  },
  mounted() {
    this.initIntersectionObserver();
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
  },
};
</script>
