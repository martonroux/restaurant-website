<script setup lang="ts">

</script>

<template>
  <div class="equipe-passionnee-row">
    <div class="equipe-passionnee-row__title">
      <h2 class="h4">Une équipe</h2>
      <div class="equipe-passionnee-row__title__draw">
        <h2 class="h3" style="font-family: var(--font-family-highlight); font-weight: lighter">passionnée</h2>
        <img src="/icons/passionnee-line.png" alt="" class="equipe-passionnee-row__title__draw__drawing">
      </div>
    </div>
    <p>
      Menée par le chef étoilé Robert Gustave, détenteur de deux étoiles Michelin, notre brigade culinaire incarne l'excellence et la passion. Chaque membre apporte son expertise unique, contribuant à créer des expériences gastronomiques mémorables.    </p>
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

.equipe-passionnee-row__title h2 {
  margin: 0;
  padding: 0;
}

.equipe-passionnee-row__title__draw__drawing {
  width: 170px;
  position: absolute;
  transform: translateY(-170%);
}

</style>