<template>
  <div class="bg-gray-900 text-white py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold mb-4">Our Products</h1>
      <div
        class="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6"
      >
        <div class="flex items-center space-x-4 mb-4 sm:mb-0">
          <label for="sort" class="text-gray-400">Sort by:</label>
          <select
            id="sort"
            v-model="sortBy"
            class="bg-gray-800 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
          </select>
        </div>
        <div class="flex items-center space-x-4">
          <label for="category" class="text-gray-400">Category:</label>
          <select
            id="category"
            v-model="selectedCategory"
            class="bg-gray-800 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="">All</option>
            <option
              v-for="category in categories"
              :key="category"
              :value="category"
            >
              {{ category }}
            </option>
          </select>
        </div>
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="bg-gray-800 rounded-lg overflow-hidden"
        >
          <img
            :src="product.image"
            :alt="product.name"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h3 class="text-xl font-bold mb-2">{{ product.name }}</h3>
            <p class="text-gray-400 mb-4">{{ product.description }}</p>
            <p class="text-yellow-500 font-bold text-lg">
              {{ formatPrice(product.price) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Product 1",
          description: "Description 1",
          price: 9.99,
          image: "/api/placeholder/326/326",
          category: "Category 1",
        },
        {
          id: 2,
          name: "Product 2",
          description: "Description 2",
          price: 19.99,
          image: "/api/placeholder/326/326",
          category: "Category 2",
        },
        {
          id: 3,
          name: "Product 3",
          description: "Description 3",
          price: 14.99,
          image: "/api/placeholder/326/326",
          category: "Category 1",
        },
        {
          id: 4,
          name: "Product 4",
          description: "Description 4",
          price: 24.99,
          image: "/api/placeholder/326/326",
          category: "Category 3",
        },
        {
          id: 5,
          name: "Product 5",
          description: "Description 5",
          price: 12.99,
          image: "/api/placeholder/326/326",
          category: "Category 2",
        },
        {
          id: 6,
          name: "Product 6",
          description: "Description 6",
          price: 29.99,
          image: "/api/placeholder/326/326",
          category: "Category 1",
        },
        {
          id: 7,
          name: "Product 7",
          description: "Description 7",
          price: 17.99,
          image: "/api/placeholder/326/326",
          category: "Category 3",
        },
        {
          id: 8,
          name: "Product 8",
          description: "Description 8",
          price: 22.99,
          image: "/api/placeholder/326/326",
          category: "Category 2",
        },
      ],
      sortBy: "price-asc",
      selectedCategory: "",
    };
  },
  computed: {
    categories() {
      return [...new Set(this.products.map((product) => product.category))];
    },
    filteredProducts() {
      let filtered = this.products;
      if (this.selectedCategory) {
        filtered = filtered.filter(
          (product) => product.category === this.selectedCategory
        );
      }
      if (this.sortBy === "price-asc") {
        filtered = filtered.sort((a, b) => a.price - b.price);
      } else if (this.sortBy === "price-desc") {
        filtered = filtered.sort((a, b) => b.price - a.price);
      } else if (this.sortBy === "name-asc") {
        filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
      } else if (this.sortBy === "name-desc") {
        filtered = filtered.sort((a, b) => b.name.localeCompare(a.name));
      }
      return filtered;
    },
  },
  methods: {
    formatPrice(price) {
      return `$${price.toFixed(2)}`;
    },
  },
};
</script>
