<script setup lang="ts">
import Gallery from "../generic/Gallery.vue";
</script>

<template>
  <Gallery :image-list="images">
    <h2>Galerie</h2>
  </Gallery>
</template>

<script lang="ts">

export default {
  data() {
    return {
      images: [
        { img: "/images/blank-img.png" },
        { img: "/images/blank-img.png" },
        { img: "/images/blank-img.png" },
        { img: "/images/blank-img.png" },
        { img: "/images/blank-img.png" }
      ]
    }
  }
}
</script>

<style scoped>



</style>
