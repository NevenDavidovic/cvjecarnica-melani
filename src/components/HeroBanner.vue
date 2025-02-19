<template>
  <div
    class="relative h-[500px] bg-gray-900 overflow-hidden flex items-center justify-center text-center"
  >
    <img
      :src="resolvedImageSrc"
      :alt="imageAlt"
      class="absolute inset-0 w-full h-full object-cover opacity-0 scale-110 animate-fadeZoom"
    />

    <div class="absolute inset-0 bg-black/70"></div>

    <div class="relative z-10 px-4">
      <h1
        class="text-5xl uppercase text-white font-normal opacity-0 animate-slideUp"
      >
        {{ title }}
      </h1>
      <p
        class="mt-3 text-xl max-w-[90%] sm:max-w-[500px] text-white font-normal opacity-0 animate-fadeIn delay-500"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroBanner",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      default: "Hero banner image",
    },
  },
  computed: {
    resolvedImageSrc() {
      try {
        return require(`@/assets/images/${this.imageSrc}`);
      } catch (error) {
        console.error(`Image not found: ${this.imageSrc}`, error);
        return "";
      }
    },
  },
};
</script>

<style scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.animate-fadeIn {
  animation: fadeIn 1.5s ease-out forwards;
}

@keyframes fadeZoom {
  0% {
    opacity: 0;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.animate-fadeZoom {
  animation: fadeZoom 1s ease-out forwards;
}

@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-slideUp {
  animation: slideUp 1.2s ease-out forwards;
}

.delay-500 {
  animation-delay: 0.5s;
}
</style>
