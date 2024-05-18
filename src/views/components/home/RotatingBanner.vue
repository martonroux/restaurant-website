<script setup lang="ts">
</script>

<template>
  <div class="rotating-banner">
    <div class="rotating-banner__flag">
      <span class="rotating-banner__flag__line1"></span>
      <span class="rotating-banner__flag__line2"></span>
      <span class="rotating-banner__flag__line3"></span>
    </div>
    <div class="rotating-banner__text">
      <p> --- Maison Rocher --- Depuis 1927 --- Maison Rocher --- Depuis 1927 --- Maison Rocher --- Depuis 1927 --- Maison Rocher --- Depuis 1927 --- Maison Rocher --- Depuis 1927 --- Maison Rocher --- Depuis 1927 --- Maison Rocher --- Depuis 1927 --- Maison Rocher --- Depuis 1927 --- Maison Rocher --- Depuis 1927 --- Maison Rocher --- Depuis 1927 --- Maison Rocher --- Depuis 1927 --- Maison Rocher --- Depuis 1927</p>
      <p> --- Maison Rocher --- Depuis 1927 --- Maison Rocher --- Depuis 1927 --- Maison Rocher --- Depuis 1927 --- Maison Rocher --- Depuis 1927 --- Maison Rocher --- Depuis 1927 --- Maison Rocher --- Depuis 1927 --- Maison Rocher --- Depuis 1927 --- Maison Rocher --- Depuis 1927 --- Maison Rocher --- Depuis 1927 --- Maison Rocher --- Depuis 1927 --- Maison Rocher --- Depuis 1927 --- Maison Rocher --- Depuis 1927</p>
    </div>
    <div class="rotating-banner__flag rotating-banner__flag2">
      <span class="rotating-banner__flag__line1"></span>
      <span class="rotating-banner__flag__line2"></span>
      <span class="rotating-banner__flag__line3"></span>
    </div>
  </div>
</template>

<style scoped>

.rotating-banner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  overflow: hidden;
}

.rotating-banner__flag {
  display: flex;
  flex-direction: row;
  width: 100%;
  position: absolute;
  transform: translateY(-2.5rem);
}

.rotating-banner__flag2 {
  transform: translateY(2.5rem);
}

.rotating-banner__flag span {
  width: 100%;
  height: 3px;
}

.rotating-banner__flag__line1 {
  background-color: #318CE7;
}

.rotating-banner__flag__line2 {
  background-color: var(--white-secondary-color);
}

.rotating-banner__flag__line3 {
  background-color: var(--highlight-color);
}

.rotating-banner__text {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.rotating-banner__text p {
  font-family: var(--font-family-highlight);
  font-size: var(--h5-font-size);
  color: gray;

  animation: rotating-banner 30s linear infinite;
  display: inline-block;
  white-space: nowrap;
}

.rotating-banner__text p:nth-child(2) {
  animation-delay: 30s;
}

@keyframes rotating-banner {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
}

</style>