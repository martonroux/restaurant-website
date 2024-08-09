<script setup>
import MenuComponent from "../components/menu/MenuComponent.vue";
import Gallery from "../components/generic/Gallery.vue";
import { useHead } from '@vueuse/head';

useHead({
  title: 'Maison Rocher - Notre Menu',
  meta: [
    { name: 'description', content: 'Venez découvrir le menu de la Maison Rocher. Chaque plat est travaillé avec soin et relève de l\'expérience légendaire de notre chef étoilé.' },
    { name: 'keywords', content: 'menu, maison rocher, gastronomique' },
    { name: 'robots', content: 'index, follow' }
  ],
});

const getImageUrl = (imageName) => {
  return `${import.meta.env.BASE_URL}images/${imageName}`
}
</script>

<template>
  <div class="menu-page">
    <div class="menu-page__title">
      <h1>Notre
        <span class="title highlight menu-page__title__highlight">
          Menu
          <img src="/icons/unique-line.png" alt="" class="menu-page__title__line"/>
        </span>
      </h1>
    </div>
    <div class="menu-page__content">
      <MenuComponent title="Entrées" :dishes="entrees.dishes" :prices="entrees.prices"/>
      <MenuComponent title="Plats" :dishes="plats.dishes" :prices="plats.prices"/>
    </div>
    <div class="menu-page__content">
      <MenuComponent title="Carte des vins" :dishes="vins.dishes" :prices="vins.prices"/>
      <MenuComponent title="Desserts" :dishes="desserts.dishes" :prices="desserts.prices"/>
    </div>
    <Gallery :circular="true" :autoplay-interval="4000" :image-list="[{img: getImageUrl('blank-img.png')}, {img: getImageUrl('blank-img.png')}, {img: getImageUrl('blank-img.png')}, {img: getImageUrl('blank-img.png')}]">
      <h3>Un avant goût:</h3>
    </Gallery>
  </div>
</template>

<script>
export default {
  data() {
    return {
      entrees: {
        dishes: [
            "Entrée n°1",
            "Entrée n°2",
            "Entrée n°3",
            "Entrée n°4",
            "Entrée n°5"
        ],
        prices: [
            12.0,
            15.0,
            10.0,
            8.0,
            9.0
        ]
      },
      plats: {
        dishes: [
            "Plat n°1",
            "Plat n°2",
            "Plat n°3",
            "Plat n°4",
            "Plat n°5"
        ],
        prices: [
            20.0,
            25.0,
            30.0,
            35.0,
            40.0
        ]
      },
      desserts: {
        dishes: [
            "Dessert n°1",
            "Dessert n°2",
            "Dessert n°3",
            "Dessert n°4",
            "Dessert n°5"
        ],
        prices: [
            5.0,
            6.0,
            7.0,
            8.0,
            9.0
        ]
      },
      vins: {
        dishes: [
            "Vin n°1",
            "Vin n°2",
            "Vin n°3",
            "Vin n°4",
            "Vin n°5"
        ],
        prices: [
            10.0,
            15.0,
            20.0,
            25.0,
            30.0
        ]
      }
    }
  }
}
</script>

<style scoped>

.menu-page {
  padding: 75px 1.5rem 0 1.5rem;

  display: flex;
  flex-direction: column;
  width: 100%;
}

.menu-page__content {
  display: flex;
  flex-direction: row;
  gap: 3rem;

  width: 100%;
}

.menu-page__title__highlight {
  margin-left: 0.8rem;
}

.menu-page__title__line {
  width: 200px;
  position: absolute;
  margin-top: 1rem;

  transform: translate(-90%, 70px);
}

@media (max-width: 1000px) {
  .menu-page__content {
    flex-direction: column;
    max-width: 600px;
    margin: 0 auto;
    gap: 0;
  }
}

@media (max-width: 600px) {
  .menu-page__title__line {
    width: 160px;
    transform: translate(-90%, 50px);
  }
}

</style>