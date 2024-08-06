<script setup lang="ts">

</script>

<template>
  <div class="equipe-passionnee-row">
    <div class="equipe-passionnee-row__title">
      <p class="h2">Une équipe</p>
      <div class="equipe-passionnee-row__title__draw">
        <p class="h1" style="font-family: var(--font-family-highlight), sans-serif; font-weight: lighter">passionnée</p>
        <img src="/icons/passionnee-line.png" alt="" class="equipe-passionnee-row__title__draw__drawing">
      </div>
    </div>
    <p>
      Menée par le chef étoilé Robert Gustave, détenteur de deux étoiles Michelin, notre brigade culinaire incarne l'excellence et la passion. Chaque membre apporte son expertise unique, contribuant à créer des expériences gastronomiques mémorables.
    </p>
  </div>
</template>

<style scoped>

.equipe-passionnee-row__title {
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
  flex-wrap: wrap;
}

.equipe-passionnee-row__title p {
  margin: 0;
  padding: 0;
}

.equipe-passionnee-row__title__draw__drawing {
  width: 170px;
  position: absolute;
  transform: translateY(-170%);
  z-index: 1;
}

</style>