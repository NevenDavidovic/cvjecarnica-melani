<!-- FilterMenu.vue -->
<template>
  <div class="flex justify-between border-b border-gray-200 py-4">
    <div v-for="category in categories" :key="category.id" class="mr-4">
      <button
        v-for="filter in category.filters"
        :key="filter.id"
        :class="[
          'px-4 py-2 rounded-md hover:bg-gray-100',
          selectedFilters[category.id].includes(filter.id) ? 'bg-gray-200' : '',
        ]"
        @click="toggleFilter(category.id, filter.id)"
      >
        {{ filter.name }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true,
    },
    selectedFilters: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toggleFilter(categoryId, filterId) {
      this.$emit("update-filters", categoryId, filterId);
    },
  },
};
</script>
