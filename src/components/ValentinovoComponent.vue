<template>
  <div
    ref="section"
    class="bg-red-600 py-16 px-4 opacity-0 transform scale-95 transition-all duration-1000 ease-out"
  >
    <div class="container mx-auto max-w-6xl">
      <div class="text-center mb-12">
        <h2 class="text-white font-playfair text-4xl md:text-5xl mb-4">
          {{ t("valentinovo") }}
        </h2>
        <p class="text-white italic text-lg md:text-xl">
          "Love is like a flower, blooming with care and tenderness."
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div class="overflow-hidden fade-in">
          <img
            src="../assets/images/buket-valentinovo.png"
            alt="Valentine's Day Roses"
            class="w-full h-full"
          />
        </div>
        <div class="rounded-2xl overflow-hidden fade-in">
          <img
            src="../assets/images/izlog-valentinovo.png"
            alt="Valentine's Day Shop Display"
            class="w-full h-full"
          />
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="overflow-hidden aspect-square fade-in">
          <img
            src="../assets/images/c-1-valentinovo.png"
            alt="Valentine's Arrangement 1"
            class="w-full h-full"
          />
        </div>
        <div class="overflow-hidden aspect-square fade-in">
          <img
            src="../assets/images/c-2-valentinovo.png"
            alt="Valentine's Arrangement 2"
            class="w-full h-full"
          />
        </div>
        <div class="overflow-hidden aspect-square fade-in">
          <img
            src="../assets/images/c-3-valentinovo.png"
            alt="Valentine's Arrangement 3"
            class="w-full h-full"
          />
        </div>
        <div class="overflow-hidden aspect-square fade-in">
          <img
            src="../assets/images/c-4-valentinovo.png"
            alt="Valentine's Arrangement 4"
            class="w-full h-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";

export default {
  name: "ValentinovoComponent",
  setup() {
    const { t } = useI18n();
    const section = ref(null);

    onMounted(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("opacity-100", "scale-100");
              entry.target.classList.remove("opacity-0", "scale-95");
            }
          });
        },
        { threshold: 0.3 }
      );

      if (section.value) {
        observer.observe(section.value);
        document
          .querySelectorAll(".fade-in")
          .forEach((el) => observer.observe(el));
      }
    });

    return { t, section };
  },
};
</script>

<style scoped>
.opacity-0 {
  opacity: 0;
}
.scale-95 {
  transform: scale(0.95);
}
.opacity-100 {
  opacity: 1;
}
.scale-100 {
  transform: scale(1);
}
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1.2s ease-out, transform 1.2s ease-out;
}
.fade-in.opacity-100 {
  opacity: 1;
  transform: translateY(0);
}
</style>
