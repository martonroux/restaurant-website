<script setup>

</script>

<template>
  <div class="client-rating" :style="{width: width}">
    <p class="h5">{{ username }}</p>
    <p class="client-rating__date">{{ date }}</p>
    <img src="/icons/star-yellow.svg" alt="Star icon" class="client-rating__star"/>
    <img v-if="rating < 2" src="/icons/star-white.svg" alt="Star icon" class="client-rating__star"/>
    <img v-else src="/icons/star-yellow.svg" alt="Star icon" class="client-rating__star"/>
    <img v-if="rating < 3" src="/icons/star-white.svg" alt="Star icon" class="client-rating__star"/>
    <img v-else src="/icons/star-yellow.svg" alt="Star icon" class="client-rating__star"/>
    <img v-if="rating < 4" src="/icons/star-white.svg" alt="Star icon" class="client-rating__star"/>
    <img v-else src="/icons/star-yellow.svg" alt="Star icon" class="client-rating__star"/>
    <img v-if="rating < 5" src="/icons/star-white.svg" alt="Star icon" class="client-rating__star"/>
    <img v-else src="/icons/star-yellow.svg" alt="Star icon" class="client-rating__star"/>
    <p class="client-rating__description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    rating: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    width: {
      type: String
    }
  }
}
</script>

<style scoped>

.client-rating__star {
  width: 30px;
}

.client-rating__date {
  font-size: 0.8rem;
  color: grey;
}

.client-rating__description {
  text-wrap: normal;
}

</style>