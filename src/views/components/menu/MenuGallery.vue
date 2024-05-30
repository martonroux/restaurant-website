<script setup>
import Gallery from "../generic/Gallery.vue";
</script>

<template>
  <Gallery :image-list="[image1, image2, image3]">
  </Gallery>
</template>

<script>
export default {
  props: {
    image1: {
      type: String,
      required: true
    },
    image2: {
      type: String,
      required: true
    },
    image3: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>