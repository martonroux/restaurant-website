<script setup>
import Gallery from "../generic/Gallery.vue";

const getImageUrl = (imageName) => {
  return `${import.meta.env.BASE_URL}images/${imageName}`
}
</script>

<template>
  <Gallery :image-list="[{img: getImageUrl(image1)}, {img: getImageUrl(image2)}, {img: getImageUrl(image3)}]">
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