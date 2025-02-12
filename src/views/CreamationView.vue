<template>
  <div class="min-h-screen">
    <NavbarComponent :isSectionVisible="isSectionVisible" />

    <div class="min-h-screen bg-white">
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <div class="relative lg:h-screen lg:sticky top-0">
          <div class="h-[50vh] lg:h-full relative">
            <div
              class="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"
            ></div>
            <img
              src="../assets/images/kremiranje-img.jpg"
              alt="Funeral Services"
              class="h-full w-full object-cover"
            />

            <div class="absolute bottom-12 left-12 right-12"></div>
          </div>
        </div>

        <div class="bg-white min-h-screen">
          <div class="max-w-xl mx-auto px-8 py-24 space-y-24">
            <div class="group">
              <div class="flex items-center gap-4 mb-8">
                <span
                  class="w-12 h-[1px] bg-gray-200 group-hover:w-24 transition-all duration-500"
                ></span>
                <span class="text-sm tracking-widest text-gray-400">{{
                  t("uvod_usluga_kremiranja")
                }}</span>
              </div>
              <p class="text-2xl font-light leading-relaxed text-gray-600">
                {{ t("cremation_description_2") }}
              </p>
            </div>

            <div class="group">
              <div class="flex items-center gap-4 mb-12">
                <span
                  class="w-12 h-[1px] bg-gray-200 group-hover:w-24 transition-all duration-500"
                ></span>
                <span class="text-sm tracking-widest text-gray-400">{{
                  t("dokumenti")
                }}</span>
              </div>

              <h2 class="text-3xl font-light text-gray-800 mb-8">
                {{ t("required_documents") }}
              </h2>

              <p class="text-xl text-gray-600 leading-relaxed mb-12">
                {{ t("required_documents_info") }}
              </p>

              <div class="space-y-6">
                <div
                  v-for="doc in [
                    'death_certificate',
                    'burial_permit',
                    'personal_id',
                  ]"
                  :key="doc"
                  class="group/item flex items-center py-6 border-b border-gray-100 hover:bg-gray-50 transition-all duration-300"
                >
                  <div
                    class="w-24 h-24 bg-gray-50 group-hover/item:bg-white flex items-center justify-center"
                  >
                    <span
                      class="w-2 h-2 bg-gray-300 rounded-full group-hover/item:scale-150 transition-all duration-300"
                    ></span>
                  </div>
                  <span class="text-xl text-gray-600 ml-8">{{ t(doc) }}</span>
                </div>
              </div>
            </div>

            <div class="group">
              <div class="flex items-center gap-4 mb-8">
                <span
                  class="w-12 h-[1px] bg-gray-200 group-hover:w-24 transition-all duration-500"
                ></span>
                <span class="text-sm tracking-widest text-gray-400">{{
                  t("closing_note")
                }}</span>
              </div>
              <p class="text-2xl font-light leading-relaxed text-gray-600">
                {{ t("post_cremation") }}
              </p>
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
import FooterComponent from "../components/FooterComponent.vue";
import NavbarComponent from "@/components/NavbarComponent.vue";

export default {
  name: "HomeView",
  components: {
    FooterComponent,

    NavbarComponent,
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
      owlOptions: {
        items: 1,
        nav: true,
        dots: true,
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 1000,
        navText: [
          '<i class="custom-prev-icon">←</i>',
          '<i class="custom-next-icon">→</i>',
        ],
        responsive: {
          0: { items: 2 },
          600: { items: 3 },
          1000: { items: 5 },
        },
      },
    };
  },
  setup() {
    const { t } = useI18n();
    return { t };
  },

  mounted() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
  beforeUnmount() {
    document.body.style.overflow = "auto";
  },
  methods: {
    initIntersectionObserver() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          this.isSectionVisible = entry.isIntersecting;
        });
      });

      observer.observe(this.$refs.section1);
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
