<script setup>

import ClientRating from "../generic/ClientRating.vue";
import Carousel from "primevue/carousel";

</script>

<template>
  <div class="home-ratings">
    <div class="home-ratings__title-container">
      <h2>Avis de nos clients</h2>
    </div>
    <Carousel class="home-ratings__carousel" :value="ratings" :num-visible="width > 1000 ? 3 : width > 800 ? 2 : 1" :num-scroll="1" :circular="true" :show-indicators="true" :autoplay-interval="8000">
      <template v-slot:item="slotProps">
        <div class="home-ratings__carousel__rating">
          <ClientRating :username="slotProps.data.username" :date="slotProps.data.date" :description="slotProps.data.description" :rating="slotProps.data.rating"/>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ratings: [
        {
          "username": "Marie L.",
          "date": "Mai 2024",
          "rating": 5,
          "description": "Un repas mémorable ! Chaque plat était une explosion de saveurs. Le personnel est aux petits soins. À essayer absolument."
        },
        {
          "username": "Thomas P.",
          "date": "Mai 2024",
          "rating": 4,
          "description": "Très bon restaurant gastronomique. Les plats sont bien travaillés et le service est excellent. Je recommande pour une soirée spéciale."
        },
        {
          "username": "Sophie V.",
          "date": "Mai 2024",
          "rating": 5,
          "description": "Magnifique découverte ! Les mets sont exquis et l'ambiance est parfaite pour un dîner en amoureux. Je reviendrai sans hésiter."
        },
        {
          "username": "Alexandre G.",
          "date": "Mai 2024",
          "rating": 4,
          "description": "Très bonne adresse. Cuisine raffinée et service attentif. Un peu cher, mais ça vaut le coup pour la qualité."
        },
        {
          "username": "Julie T.",
          "date": "Mai 2024",
          "rating": 5,
          "description": "Expérience inoubliable ! Les saveurs sont sublimes et le cadre est somptueux. Un sans faute du début à la fin."
        }
      ],
      width: window.innerWidth
    }
  }
}
</script>

<style scoped>

.home-ratings {
  padding: 3rem;
}

.home-ratings__title-container {
  text-align: center;
  width: 100%;
}

.home-ratings__carousel__rating {
  width: 80%;
}

.home-ratings__carousel {
  max-width: calc(100vw - 6rem);
}

@media (max-width: 600px) {
  .home-ratings {
    padding: 1rem;
  }
  .home-ratings__carousel {
    max-width: calc(100vw - 2rem);
  }
}

</style>