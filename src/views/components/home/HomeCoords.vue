<script setup>

</script>

<template>
  <div class="home-coords">
    <div class="home-coords__text">
      <p class="home-coords__text__small">Où nous trouver:</p>
      <p class="home-coords__text__big">3 Chem. du Barbu, 30420 Calvisson</p>
      <p class="home-coords__text__small">Contact:</p>
      <p class="home-coords__text__big">04 12 34 56 78</p>
    </div>
    <div class="home-coords__map">
      <img src="/images/map.png" alt="Carte du restaurant" class="home-coors__map__img"/>
    </div>
  </div>
</template>

<style scoped>

.home-coords {
  display: flex;
  flex-direction: row;
  margin-top: 5rem;
  width: 100%;
}

.home-coords > * {
  max-height: 500px;
  width: 50%;
}

.home-coords__text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  text-align: center;
}

.home-coords__map {
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.home-coords__text__small {
  font-size: calc(var(--font-size) * 0.8);
  color: gray;
}

.home-coords__text__big {
  font-size: calc(var(--h6-font-size));
}

.home-coors__map__img {
  height: 100%;
  width: auto;
}

@media (max-width: 800px) {
  .home-coords {
    flex-direction: column;
  }

  .home-coords > * {
    width: 100%;
  }
}

</style>