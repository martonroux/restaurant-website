<script setup>
</script>

<template>
  <div class="menu-component">
    <h3>{{ title }}</h3>
    <ul style="margin: 0; padding: 0;">
      <li v-for="(dish, index) in dishes" class="menu-component__dishes-list">
        <div class="menu-component__dishes-list__item">
          <p>{{ dish }}</p>
          <p>{{ convertPriceToString(prices[index]) }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String
    },
    dishes: {
      required: true,
      type: Array
    },
    prices: {
      required: true,
      type: Array
    }
  },
  methods: {
    convertPriceToString(price) {
      const euroPart = Math.trunc(price);
      const centimePart = Math.trunc((price - euroPart) * 100);

      if (centimePart === 0)
        return euroPart + "€00";
      return euroPart + "€" + centimePart;
    }
  }
}
</script>

<style scoped>

.menu-component {
  width: 100%;
}

.menu-component__dishes-list {
  list-style: none;
  font-family: var(--font-family-regular);
  font-size: var(--font-size);

  width: 100%;
}

.menu-component__dishes-list > * {
  margin-bottom: 0.5rem;
}

p {
  margin: 0.1rem;
  padding: 0;
}

.menu-component__dishes-list__item {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border-bottom: 1px solid var(--black-color);
}

</style>