<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  mounted() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
};
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}

nav {
  padding: 8px 16px;
}
</style>
