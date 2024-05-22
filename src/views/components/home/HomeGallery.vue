<script setup lang="ts">
import Carousel from 'primevue/carousel';
import Image from "primevue/image";
</script>

<template>
  <div class="home-gallery">
    <div class="home-gallery__title-container">
      <h2>Galerie</h2>
    </div>
    <Carousel class="carousel" :value="images" :num-visible="width.windowWidth > 1000 ? 3 : width.windowWidth > 800 ? 2 : 1" :num-scroll="1" :show-indicators="true">
      <template v-slot:item="slotProps">
        <div class="carousel__img">
          <Image :src="slotProps.data.img" alt="Image" width="100%" preview />
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script lang="ts">
import {useWindowWidth} from "../../../composables/windowWidth";

export default {
  data() {
    return {
      images: [
        { img: "/images/blank-img.png" },
        { img: "/images/blank-img.png" },
        { img: "/images/blank-img.png" },
        { img: "/images/blank-img.png" },
        { img: "/images/blank-img.png" }
      ],
      width: useWindowWidth()
    }
  }
}
</script>

<style scoped>

.home-gallery {
  padding: 3rem;
}
.home-gallery__title-container {
  text-align: center;
}
.carousel__img {
  width: 80%;
  max-width: 400px;
}

</style>
