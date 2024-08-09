<script setup>

</script>

<template>
  <div class="calendar-component">
    <table class="calendar-component__table">
      <caption class="calendar-component__table__caption">
        Nos horaires
      </caption>
      <tr>
        <td :style="{'border-bottom': activeDay === 'monday' ? activeBorderColor : inactiveBorderColor}">
          Lundi
        </td>
        <td :style="{'border-bottom': activeDay === 'monday' ? activeBorderColor : inactiveBorderColor}">
          {{ available['monday_start'] }}h - {{ available['monday_end'] }}h
        </td>
      </tr>
      <tr>
        <td :style="{'border-bottom': activeDay === 'tuesday' ? activeBorderColor : inactiveBorderColor}">
          Mardi
        </td>
        <td :style="{'border-bottom': activeDay === 'tuesday' ? activeBorderColor : inactiveBorderColor}">
          {{ available['tuesday_start'] }}h - {{ available['tuesday_end'] }}h
        </td>
      </tr>
      <tr>
        <td :style="{'border-bottom': activeDay === 'wednesday' ? activeBorderColor : inactiveBorderColor}">
          Mercredi
        </td>
        <td :style="{'border-bottom': activeDay === 'wednesday' ? activeBorderColor : inactiveBorderColor}">
          {{ available['wednesday_start'] }}h - {{ available['wednesday_end'] }}h
        </td>
      </tr>
      <tr>
        <td :style="{'border-bottom': activeDay === 'thursday' ? activeBorderColor : inactiveBorderColor}">
          Jeudi
        </td>
        <td :style="{'border-bottom': activeDay === 'thursday' ? activeBorderColor : inactiveBorderColor}">
          {{ available['thursday_start'] }}h - {{ available['thursday_end'] }}h
        </td>
      </tr>
      <tr>
        <td :style="{'border-bottom': activeDay === 'friday' ? activeBorderColor : inactiveBorderColor}">
          Vendredi
        </td>
        <td :style="{'border-bottom': activeDay === 'friday' ? activeBorderColor : inactiveBorderColor}">
          {{ available['friday_start'] }}h - {{ available['friday_end'] }}h
        </td>
      </tr>
      <tr>
        <td :style="{'border-bottom': activeDay === 'saturday' ? activeBorderColor : inactiveBorderColor}">
          Samedi
        </td>
        <td :style="{'border-bottom': activeDay === 'saturday' ? activeBorderColor : inactiveBorderColor}">
          {{ available['saturday_start'] }}h - {{ available['saturday_end'] }}h
        </td>
      </tr>
      <tr>
        <td :style="{'border-bottom': activeDay === 'sunday' ? activeBorderColor : inactiveBorderColor}">
          Dimanche
        </td>
        <td :style="{'border-bottom': activeDay === 'sunday' ? activeBorderColor : inactiveBorderColor}">
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
      activeDay: '',
      activeBorderColor: '1px solid var(--highlight-color)',
      inactiveBorderColor: '1px solid gray'
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

@media (max-width: 550px) {
  .calendar-component__table {
    width: 90.909vw;
  }
}

</style>