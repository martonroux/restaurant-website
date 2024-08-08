<script setup lang="ts">
import CTAButton from "../../generic/CTAButton.vue";
</script>

<template>
  <div class="cadre-unique-row">
    <div class="cadre-unique-row__title">
      <p class="h2">Un cadre</p>
      <div class="cadre-unique-row__title__draw">
        <p class="title highlight">unique</p>
        <img src="/icons/unique-line.png" alt="" class="cadre-unique-row__title__draw__drawing">
      </div>
    </div>
    <p class="cadre-unique-row__description">
      Entouré de verdure et de jardins soigneusement entretenus, notre restaurant offre un havre de paix et de tranquillité. L'architecture élégante de la maison Rocher, combinée à une décoration intérieure raffinée, crée une ambiance chaleureuse et conviviale.
    </p>
    <div class="cadre-unique-row__cta">
      <CTAButton link="/booking" text="Réserver une table" width="100%"/>
    </div>
  </div>
</template>

<style scoped>

.cadre-unique-row__title {
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
  flex-wrap: wrap;
}

.cadre-unique-row__title p {
  margin: 0;
  padding: 0;
}

.cadre-unique-row__title__draw__drawing {
  width: 170px;
  position: absolute;
  transform: translateY(-100%);
  z-index: 1;
}

.cadre-unique-row__cta {
  display: flex;
  justify-content: center;

  width: 70%;
  margin: 2rem auto 0 auto;
}

@media (max-width: 600px) {
  .cadre-unique-row__cta {
    width: 100%;
  }

  .cadre-unique-row__title__draw__drawing {
    width: 140px;
  }
}

</style>