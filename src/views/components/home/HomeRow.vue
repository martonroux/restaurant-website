<script setup lang="ts">

</script>

<template>
  <div class="home-row">
    <!-- If imageSide is true, then image is to the left -->
    <img :src="imageUrl" alt="Image de la Maison Rocher" class="home-row__image-img" :style="{order : (imageSide && width.windowWidth > 800) ? 1 : 3}">

    <div class="home-row__content" style="order: 2">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
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

.home-row__content {
  padding: 1.5rem;
  max-width: 50%;
}

.home-row__image-img {
  width: 50%;
  max-width: 50%;
}

@media (max-width: 800px) {
  .home-row {
    flex-direction: column;
  }
  .home-row__image-img {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }
  .home-row__content {
    max-width: 90%;
  }
}

</style>