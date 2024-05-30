<script setup>
import Gallery from "../generic/Gallery.vue";
</script>

<template>
  <Gallery :image-list="[{img: image1}, {img: image2}, {img: image3}]">
    <h3>Un avant goût:</h3>
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