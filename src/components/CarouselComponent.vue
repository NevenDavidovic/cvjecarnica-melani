<template>
  <div class="owl-carousel owl-theme" ref="owlCarouselRef">
    <slot></slot>
  </div>
</template>

<script>
import { onMounted, onBeforeUnmount, ref } from "vue";
import $ from "jquery";
import "owl.carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default {
  name: "OwlCarousel",
  props: {
    options: {
      type: Object,
      default: () => ({
        items: 1,
        nav: true,
        dots: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
          0: { items: 1 },
          600: { items: 2 },
          1000: { items: 3 },
        },
      }),
    },
  },
  setup(props) {
    const owlCarouselRef = ref(null);
    let owl = null;
    console.log(owl);
    onMounted(() => {
      try {
        if (owlCarouselRef.value) {
          $(owlCarouselRef.value).owlCarousel(props.options);
        }
      } catch (error) {
        console.error("Error initializing Owl Carousel:", error);
      }
    });

    onBeforeUnmount(() => {
      if (owlCarouselRef.value) {
        $(owlCarouselRef.value).trigger("destroy.owl.carousel");
      }
    });

    return {
      owlCarouselRef,
    };
  },
};
</script>
