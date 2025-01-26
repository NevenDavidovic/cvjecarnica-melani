<template>
  <div class="min-h-screen">
    <!-- Navigation -->
    <NavbarComponent :isSectionVisible="isSectionVisible" />

    <!-- Hero Banner -->

    <HeroBanner
      title="Ponuda lijesova"
      imageSrc="banner-ponuda-lijesovi.jpg"
      imageAlt="Ponuda lijesova"
    />

    <ProductListComponent />

    <FooterComponent />
  </div>
</template>

<script>
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
  props: {},
  data() {
    return {
      isSectionVisible: false,
    };
  },

  mounted() {
    if (this.filter) {
      this.applyFilter(this.filter);
    }
  },
  created() {},

  beforeUnmount() {
    document.body.style.overflow = "auto"; // Reset overflow
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
