<script setup lang="ts">
import MenuComponent from "../components/menu/MenuComponent.vue";
import MenuGallery from "../components/menu/MenuGallery.vue";
</script>

<template>
  <div class="menu-page">
    <div class="menu-page__title">
      <h1>Notre
        <span class="menu-page__title__highlight">
          Menu
          <img src="/icons/menu-line.svg" alt="" class="menu-page__title__line"/>
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
    <MenuGallery image3="/images/equipe.webp" image2="/images/blank-img.png" image1="/images/blank-img.png"/>
  </div>
</template>

<script lang="ts">
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
  padding: 75px 1rem 0 1rem;

  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
}

.menu-page__content {
  display: flex;
  flex-direction: row;
  gap: 3rem;

  width: 100%;
}

.menu-page__title__highlight {
  font-family: var(--font-family-highlight);
  font-weight: lighter;
  font-size: calc(var(--h1-font-size) * 1.3);

  margin-left: 0.5rem;
}

.menu-page__title__line {
  width: 200px;
  position: absolute;
  margin-top: 1rem;

  transform: translate(-90%, 70px);
}

</style>