<script setup>

</script>

<template>
  <div class="calendar-component">
    <table class="calendar-component__table">
      <caption class="calendar-component__table__caption">
        Nos horaires
      </caption>
      <tr>
        <td :style="{'border-bottom': activeDay === 'monday' ? '1px solid var(--highlight-color)' : '1px solid var(--black-color)'}">
          Lundi
        </td>
        <td :style="{'border-bottom': activeDay === 'monday' ? '1px solid var(--highlight-color)' : '1px solid var(--black-color)'}">
          {{ available['monday_start'] }}h - {{ available['monday_end'] }}h
        </td>
      </tr>
      <tr>
        <td :style="{'border-bottom': activeDay === 'tuesday' ? '1px solid var(--highlight-color)' : '1px solid var(--black-color)'}">
          Mardi
        </td>
        <td :style="{'border-bottom': activeDay === 'tuesday' ? '1px solid var(--highlight-color)' : '1px solid var(--black-color)'}">
          {{ available['tuesday_start'] }}h - {{ available['tuesday_end'] }}h
        </td>
      </tr>
      <tr>
        <td :style="{'border-bottom': activeDay === 'wednesday' ? '1px solid var(--highlight-color)' : '1px solid var(--black-color)'}">
          Mercredi
        </td>
        <td :style="{'border-bottom': activeDay === 'wednesday' ? '1px solid var(--highlight-color)' : '1px solid var(--black-color)'}">
          {{ available['wednesday_start'] }}h - {{ available['wednesday_end'] }}h
        </td>
      </tr>
      <tr>
        <td :style="{'border-bottom': activeDay === 'thursday' ? '1px solid var(--highlight-color)' : '1px solid var(--black-color)'}">
          Jeudi
        </td>
        <td :style="{'border-bottom': activeDay === 'thursday' ? '1px solid var(--highlight-color)' : '1px solid var(--black-color)'}">
          {{ available['thursday_start'] }}h - {{ available['thursday_end'] }}h
        </td>
      </tr>
      <tr>
        <td :style="{'border-bottom': activeDay === 'friday' ? '1px solid var(--highlight-color)' : '1px solid var(--black-color)'}">
          Vendredi
        </td>
        <td :style="{'border-bottom': activeDay === 'friday' ? '1px solid var(--highlight-color)' : '1px solid var(--black-color)'}">
          {{ available['friday_start'] }}h - {{ available['friday_end'] }}h
        </td>
      </tr>
      <tr>
        <td :style="{'border-bottom': activeDay === 'saturday' ? '1px solid var(--highlight-color)' : '1px solid var(--black-color)'}">
          Samedi
        </td>
        <td :style="{'border-bottom': activeDay === 'saturday' ? '1px solid var(--highlight-color)' : '1px solid var(--black-color)'}">
          {{ available['saturday_start'] }}h - {{ available['saturday_end'] }}h
        </td>
      </tr>
      <tr>
        <td :style="{'border-bottom': activeDay === 'sunday' ? '1px solid var(--highlight-color)' : '1px solid var(--black-color)'}">
          Dimanche
        </td>
        <td :style="{'border-bottom': activeDay === 'sunday' ? '1px solid var(--highlight-color)' : '1px solid var(--black-color)'}">
          {{ available['sunday_start'] }}h - {{ available['sunday_end'] }}h
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeDay: ''
    }
  },
  props: {
    available: {
      required: true
    }
  },
  mounted() {
    this.getActiveDay();
  },
  methods: {
    getActiveDay() {
      const currentDate = new Date();
      const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
      this.activeDay = daysOfWeek[currentDate.getDay()];
    }
  }
}
</script>

<style scoped>

.calendar-component__table {
  width: 500px;

  font-family: var(--font-family-regular), sans-serif;
  font-size: var(--font-size);

  border-collapse: collapse;
}

.calendar-component__table__caption {
  font-size: var(--h5-font-size);
  text-align: left;
  margin-bottom: 0.2rem;
}

.calendar-component__table tr > * {
  border-bottom: 1px solid var(--black-color);
  padding: 0.2rem 0;
}

.calendar-component__table tr td:nth-child(2) {
  text-align: right;
}

</style>