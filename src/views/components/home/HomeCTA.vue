<script setup>

import CTAButton from "../generic/CTAButton.vue";
</script>

<template>
  <div class="home-cta">
    <div class="home-cta__title-container">
      <h3>Convaincu(e)?</h3>
    </div>
    <div class="home-cta__content">
      <CTAButton link="/menu" text="Notre menu"/>
      <CTAButton link="/booking" text="Réservations"/>
    </div>
  </div>
</template>

<style scoped>

.home-cta__title-container {
  text-align: center;
}

.home-cta__content {
  display: flex;
  flex-direction: row;
  gap: 4rem;
  margin-top: 2rem;
}

</style>