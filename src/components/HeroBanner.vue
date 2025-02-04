<template>
  <div class="relative h-[500px] bg-gray-900">
    <img
      :src="resolvedImageSrc"
      :alt="imageAlt"
      class="w-full h-full object-cover opacity-40"
    />
    <h1
      class="w-full max-w-[500px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-white font-normal"
    >
      {{ title }}
      <br />
      <span class="text-xl text-white font-normal">{{ description }}</span>
    </h1>
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
      // Resolve the path dynamically
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
