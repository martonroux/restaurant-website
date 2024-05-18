<script setup lang="ts">

</script>

<template>
  <div class="cadre-unique-row">
    <div class="cadre-unique-row__title">
      <h2 class="h4">Un cadre</h2>
      <div class="cadre-unique-row__title__draw">
        <h2 class="h3" style="font-family: var(--font-family-highlight); font-weight: lighter">unique</h2>
        <img src="/icons/unique-line.png" alt="" class="cadre-unique-row__title__draw__drawing">
      </div>
    </div>
    <p class="cadre-unique-row__description">
      Entouré de verdure et de jardins soigneusement entretenus, notre restaurant offre un havre de paix et de tranquillité. L'architecture élégante du manoir Rocher, combinée à une décoration intérieure raffinée, crée une ambiance chaleureuse et conviviale.    </p>
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

.cadre-unique-row__title h2 {
  margin: 0;
  padding: 0;
}

.cadre-unique-row__title__draw__drawing {
  width: 170px;
  position: absolute;
  transform: translateY(-100%);
  z-index: 1;
}

</style>