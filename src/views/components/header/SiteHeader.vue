<script setup lang="ts">
import MenuButton from "./MenuButton.vue";
</script>

<template>
  <div class="site-header" :style="{height: headerHeight}">
    <div class="row">
      <router-link to="/" class="site-header__main-menu-button router-link">M</router-link>

      <!-- This is the Menu for big screens -->
      <div v-if="width.windowWidth > 800" class="site-header__large-browser-menu">
        <router-link to="/menu" class="site-header__large-browser-menu__button router-link">Menu</router-link>
        <router-link to="/booking" class="site-header__large-browser-menu__button router-link">Réservations</router-link>
      </div>

      <!-- This is the Menu for small screens -->
      <div v-else>
        <MenuButton :active="dropDownActive" @toggle-dropdown="toggleDropDown"/>
      </div>
    </div>

    <!-- This is the Dropdown menu -->
    <div v-if="dropDownActive" class="site-header__small-browser-menu">
      <router-link to="/menu" class="site-header__large-browser-menu__button router-link" @click="toggleDropDown(false)">
        <p class="h6">Menu</p>
        <img src="/icons/arrow.svg" class="site-header__large-browser-menu__button-image" alt="arrow">
      </router-link>
      <router-link to="/booking" class="site-header__large-browser-menu__button router-link" @click="toggleDropDown(false)">
        <p class="h6">Réservations</p>
        <img src="/icons/arrow.svg" class="site-header__large-browser-menu__button-image" alt="arrow">
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { useWindowWidth } from "../../../composables/windowWidth.ts";

export default {
  data() {
    return {
      width: useWindowWidth(),
      dropDownActive: false,
      headerHeight: 'auto'
    }
  },
  methods: {
    toggleDropDown(value: boolean) {
      this.dropDownActive = value;
      if (this.dropDownActive) {
        this.headerHeight = '100vh';
      } else {
        this.headerHeight = 'auto';
      }
    }
  }
}
</script>

<style scoped>

.site-header {
  padding: 1rem 1.3rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: var(--white-color);
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.site-header__main-menu-button {
  color: var(--highlight-color);
  font-size: var(--h5-font-size);
  font-family: var(--font-family-highlight), sans-serif;
  font-weight: bolder;
}

.site-header__large-browser-menu {
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
}

.site-header__large-browser-menu__button {
  color: var(--black-color);
  font-size: var(--font-size);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.site-header__large-browser-menu__button-image {
  height: 1.5rem;
}

.site-header__small-browser-menu {
  display: flex;
  flex-direction: column;
}

</style>