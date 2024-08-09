<script setup lang="ts">
import SiteHeader from "./views/components/header/SiteHeader.vue";
import SiteFooter from "./views/components/footer/SiteFooter.vue";
import LoadingScreen from "./views/pages/LoadingScreen.vue";
</script>

<template>
  <LoadingScreen class="app-loading-screen" :style="{opacity: loadingScreenOpacity, display: loadingScreenDisplay}" />
  <header>
    <SiteHeader />
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <SiteFooter />
  </footer>
</template>

<script lang="ts">
export default {
  data() {
    return {
      loadingScreenOpacity: document.readyState === "complete" ? 0 : 100,
      loadingScreenDisplay: "null",
      pageLoaded: false,
      eventListenerShouldClose: false
    }
  },
  mounted() {
      window.addEventListener('load', () => {
        this.pageLoaded = true;
        if (this.eventListenerShouldClose === true) {
          this.loadingScreenOpacity = 0;
          setTimeout(() => {
            this.loadingScreenDisplay = "none"
          }, 1000);
        }
      });
      this.hideLoadingScreen();
  },
  methods: {
    hideLoadingScreen() {
      setTimeout(() => {
        if (this.pageLoaded === true) {

          this.loadingScreenOpacity = 0;
          setTimeout(() => {
            this.loadingScreenDisplay = "none"
          }, 1000);

        } else {

          this.eventListenerShouldClose = true;

        }
      }, 2000);
    }
  }
}
</script>

<style scoped>

header {
  position: fixed;
  width: 100%;
  z-index: 100;
}

main {
  max-width: 1300px;
  min-height: calc(100vh - 75px);
  margin: 0 auto;
}

.app-loading-screen {
  position: fixed;
  z-index: 99999;
  transition: opacity 1s ease;
}

</style>
