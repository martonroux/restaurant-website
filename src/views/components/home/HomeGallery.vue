<script setup lang="ts">
import Carousel from 'primevue/carousel';
</script>

<template>
  <div>
    <Carousel :value="images" :numVisible="3" :numScroll="1">
      <template #item="slotProps">
        <div class="image-item">
          <img :src="slotProps.data.img" alt="image" />
        </div>
      </template>
    </Carousel>
  </div>
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
.image-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
}

.image-item img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}
</style>
