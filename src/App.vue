<script setup lang="ts">
import SiteHeader from "./views/components/header/SiteHeader.vue";
</script>

<template>
  <header>
    <SiteHeader />
  </header>
  <main>
    <router-view/>
  </main>
</template>

<style scoped>

header {
  position: fixed;
  width: 100%;
  z-index: 100;
}

</style>
