<script setup lang="ts">
import SiteHeader from "./views/components/header/SiteHeader.vue";
import SiteFooter from "./views/components/footer/SiteFooter.vue";
</script>

<template>
  <header>
    <SiteHeader />
  </header>
  <main>
    <router-view/>
  </main>
  <footer>
    <SiteFooter />
  </footer>
</template>

<style scoped>

header {
  position: fixed;
  width: 100%;
  z-index: 100;
}

main {
  max-width: 1300px;
  min-height: calc(100vh - 75px);
  margin: 0 auto;
}

</style>
