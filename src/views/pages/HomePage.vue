<script setup lang="ts">
import HomeRow from "../components/home/HomeRow.vue";
import SavoirFaireRow from "../components/home/rows/SavoirFaireRow.vue";
import EquipePassionneeRow from "../components/home/rows/EquipePassionneeRow.vue";
import CadreUniqueRow from "../components/home/rows/CadreUniqueRow.vue";
import RotatingBanner from "../components/home/RotatingBanner.vue";
import HomeGalery from "../components/home/HomeGallery.vue";
import HomeRatings from "../components/home/HomeRatings.vue";
import HomeCTA from "../components/home/HomeCTA.vue";
import HomeCoords from "../components/home/HomeCoords.vue";
</script>

<template>
  <div class="home-page">
    <div class="home-page__logo">
      <img v-if="width.windowWidth > 800" src="/icons/maison-rocher-title.png" alt="Logo de la Maison Rocher" class="home-page__logo-img">
      <img v-else src="/icons/maison-rocher-title-small.png" alt="Logo de la Maison Rocher" class="home-page__logo-img">
    </div>
    <HomeRow image-url="michelin-food.webp" :image-side="true">
      <SavoirFaireRow/>
    </HomeRow>
    <HomeRow image-url="equipe.webp" :image-side="false">
      <EquipePassionneeRow/>
    </HomeRow>
    <HomeRow image-url="manor.webp" :image-side="true">
      <CadreUniqueRow/>
    </HomeRow>
    <span class="separator"/>
    <RotatingBanner/>
    <HomeGalery/>
    <HomeRatings/>
    <HomeCTA/>
    <HomeCoords/>
  </div>
</template>

<script lang="ts">
import {useWindowWidth} from "../../composables/windowWidth.ts";

export default {
  data() {
    return {
      width: useWindowWidth()
    };
  }
};
</script>

<style scoped>

.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}

.home-page__logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.home-page__logo-img {
  width: 80%;
  max-width: 1000px;
}

.separator {
  height: 3rem;
}

</style>