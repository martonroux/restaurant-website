<script setup>
import Carousel from "primevue/carousel";
import Image from "primevue/image";
</script>

<template>
  <div class="gallery">
    <div class="gallery__title-container">
      <slot/>
    </div>
    <Carousel class="carousel" :value="imageList" :num-visible="width.windowWidth > 1000 ? 3 : width.windowWidth > 800 ? 2 : 1" :num-scroll="1" :show-indicators="true">
      <template v-slot:item="slotProps">
        <div class="carousel__img">
          <Image :src="slotProps.data.img" alt="Image" width="100%" preview />
        </div>
      </template>
    </Carousel>
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
    imageList: {
      required: true,
      type: Array
    }
  }
}
</script>

<style scoped>

.gallery {
  padding: 3rem;
}
.gallery__title-container {
  text-align: center;
}
.carousel__img {
  width: 80%;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 600px) {
  .gallery {
    padding: 1rem;
  }
}

</style>