<script setup>

</script>

<template>
  <router-link :to="link" class="cta-button" :style="{width: width}">
    <p>{{ text }}</p>
    <img src="/icons/arrow.svg" alt="Flèche" class="cta-button__arrow"/>
  </router-link>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    link: {
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

.cta-button {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0.2rem;

  background-color: var(--white-secondary-color);
  border-radius: 10px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.10);

  text-decoration: none;
}

.cta-button p {
  margin: 0.8rem;
}

.cta-button__arrow {
  width: 20%;
  max-width: 40px;
}

</style>