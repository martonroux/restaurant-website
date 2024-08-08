<script setup>
const getImageUrl = (imageName) => {
  return `${import.meta.env.BASE_URL}images/${imageName}`
}
</script>

<template>
  <div class="home-row">
    <!-- If imageSide is true, then image is to the left -->
    <div class="home-row__img-container" :style="{order : (imageSide && width.windowWidth > 800) ? 1 : 3}">
      <img :src="getImageUrl(imageUrl)" alt="Image de la Maison Rocher" class="home-row__image-img">
    </div>

    <div class="home-row__content" style="order: 2">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import {useWindowWidth} from "../../../composables/windowWidth.ts";

export default {
  data() {
    return {
      width: useWindowWidth()
    }
  },
  props: {
    imageSide: {
      type: Boolean,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>

.home-row {
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 100vw;
  max-width: 1200px;
}

.home-row__img-container {
  width: 50%;
  max-width: 50%;
  height: 500px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.home-row__content {
  padding: 1.5rem;
  max-width: 50%;
}

.home-row__image-img {
  width: auto;
  height: 100%;
}

@media (max-width: 800px) {
  .home-row {
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }
  .home-row__img-container {
    width: 100%;
    max-width: 100%;
  }
  .home-row__content {
    max-width: 100%;
  }
}

</style>