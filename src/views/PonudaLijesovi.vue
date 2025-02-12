<template>
  <div class="min-h-screen">
    <NavbarComponent :isSectionVisible="isSectionVisible" />
    <HeroBanner
      :title="t('coffins_offer')"
      imageSrc="banner-ponuda-lijesovi.jpg"
      :imageAlt="t('coffins_offer')"
    />

    <ProductListComponent />

    <FooterComponent />
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
import FooterComponent from "../components/FooterComponent.vue";
import ProductListComponent from "@/components/ProductListComponent.vue";
import NavbarComponent from "@/components/NavbarComponent.vue";
import HeroBanner from "@/components/HeroBanner.vue";

export default {
  name: "HomeView",
  components: {
    FooterComponent,
    ProductListComponent,
    NavbarComponent,
    HeroBanner,
  },
  data() {
    return {
      isSectionVisible: false,
      isMobileMenuOpen: false,
      submenuPonuda: false,
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
  beforeUnmount() {
    document.body.style.overflow = "auto";
  },
  methods: {
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
