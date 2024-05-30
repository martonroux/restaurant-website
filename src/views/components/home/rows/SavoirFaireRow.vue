<script setup lang="ts">

import CTAButton from "../../generic/CTAButton.vue";
</script>

<template>
  <div class="savoir-faire-row">
    <div class="savoir-faire-row__title">
      <p class="h2">Un</p>
      <div class="savoir-faire-row__title__draw">
        <p class="h1" style="font-family: var(--font-family-highlight); font-weight: lighter">savoir-faire</p>
        <img src="/icons/savoir-faire-line.png" alt="" class="savoir-faire-row__title__draw__drawing">
      </div>
      <p class="h2">générationnel</p>
    </div>
    <p class="savoir-faire-row__description">
      Fondée il y a plus de 90 ans, la Maison Rocher est un pilier de la gastronomie traditionnelle. Nos chefs talentueux allient recettes authentiques et innovation culinaire pour offrir une expérience unique. Découvrez la passion et l’excellence qui font notre renommée.
    </p>
    <div class="savoir-faire-row__cta">
      <CTAButton link="/menu" text="Voir nos plats" width="100%"/>
    </div>
  </div>
</template>

<style scoped>

.savoir-faire-row__title {
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
  flex-wrap: wrap;
}

.savoir-faire-row__title p {
  margin: 0;
  padding: 0;
}

.savoir-faire-row__cta {
  display: flex;
  justify-content: center;

  width: 70%;
  margin: 2rem auto 0 auto;
}

.savoir-faire-row__title__draw__drawing {
  width: 210px;
  position: absolute;
  transform: translateY(-70%);
  z-index: 1;
}

@media (max-width: 600px) {
  .savoir-faire-row__cta {
    width: 100%;
  }
}

</style>