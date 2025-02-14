<template>
  <div
    ref="section"
    class="bg-bg_primary text-cyan-300 py-16 px-4 overflow-hidden"
  >
    <div class="max-w-6xl mx-auto">
      <h2
        class="text-4xl md:text-5xl font-medium text-center mb-4 opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-100"
      >
        {{ t("kako_doci_do_nas") }}
      </h2>

      <div
        class="text-center text-[1.25rem] mb-8 text-gray-300 opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-200"
      >
        <p>
          {{ t("flower_shop") }} Melani - Ulica Mladena Vodanovića 4b, Supetar,
          Hrvatska.
        </p>
        <p class="mt-2">
          {{ t("u_trenutku") }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          class="md:col-span-2 opacity-0 scale-95 transition-all duration-1000 ease-out delay-300"
        >
          <div class="rounded-lg overflow-hidden shadow-xl relative group">
            <img
              src="../assets/images/storefront-melani-1.png"
              alt="Melanie Flower Shop Storefront"
              class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>
        </div>

        <div
          class="opacity-0 scale-95 transition-all duration-1000 ease-out delay-400"
        >
          <div class="rounded-lg overflow-hidden shadow-xl relative group">
            <img
              src="../assets/images/storefront-melani-2.png"
              alt="Melanie Flower Shop Window Display"
              class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
import { ref, onMounted } from "vue";

export default {
  name: "HowToFindUsSection",
  setup() {
    const { t } = useI18n();
    const section = ref(null);

    const handleScroll = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(
                "opacity-100",
                "translate-y-0",
                "scale-100"
              );
              entry.target.classList.remove(
                "opacity-0",
                "translate-y-10",
                "scale-95"
              );
            }
          });
        },
        { threshold: 0.2 }
      );

      if (section.value) {
        section.value
          .querySelectorAll("*")
          .forEach((el) => observer.observe(el));
      }
    };

    onMounted(() => {
      handleScroll();
    });

    return { t, section };
  },
};
</script>
