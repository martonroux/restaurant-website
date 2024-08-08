<script setup>
import Gallery from "../generic/Gallery.vue";

</script>

<template>
  <Gallery :image-list="images">
    <h2>Galerie</h2>
  </Gallery>
</template>

<script>


const getImageUrl = (imageName) => {
  return `${import.meta.env.BASE_URL}images/${imageName}`
}

export default {
  data() {
    return {
      images: [
        { img: getImageUrl("blank-img.png") },
        { img: getImageUrl("blank-img.png") },
        { img: getImageUrl("blank-img.png") },
        { img: getImageUrl("blank-img.png") },
        { img: getImageUrl("blank-img.png") }
      ]
    }
  },
  methods: {
  }
}
</script>

<style scoped>



</style>
