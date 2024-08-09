<script setup>
import HomeRow from "../components/home/HomeRow.vue";
import SavoirFaireRow from "../components/home/rows/SavoirFaireRow.vue";
import EquipePassionneeRow from "../components/home/rows/EquipePassionneeRow.vue";
import CadreUniqueRow from "../components/home/rows/CadreUniqueRow.vue";
import RotatingBanner from "../components/home/RotatingBanner.vue";
import HomeRatings from "../components/home/HomeRatings.vue";
import HomeCTA from "../components/home/HomeCTA.vue";
import HomeCoords from "../components/home/HomeCoords.vue";
import { useHead } from '@vueuse/head';

useHead({
  title: 'Maison Rocher - Cuisine française depuis 1927',
  meta: [
    { name: 'description', content: 'Venez découvrir la Maison Rocher! Notre chef étoilé vous propose des plats qui vous feront tous voyager au travers de la culture gastronomique française. Le cadre naturel iconique du manoir de la Maison Rocher ajoute une touche d\'originalité, qui ne fera qu\'ajouter à l\'expérience.' },
    { name: 'keywords', content: 'cuisine, restaurant, français, gastronomique, maison rocher, france' },
    { name: 'robots', content: 'index, follow' }
  ],
});
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
    <HomeRatings/>
    <HomeCTA/>
    <HomeCoords v-if="width > 800"/>
    <span v-else class="separator"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      width: window.innerWidth
    }
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.onResize();
      });
    })
  },

  beforeDestroy() {
    window.removeEventListener('resize', () => {
      this.onResize();
    });
  },

  methods: {
    onResize() {
      this.width = window.innerWidth
    }
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