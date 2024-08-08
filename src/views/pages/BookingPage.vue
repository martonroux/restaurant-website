<script setup>
import CalendarComponent from "../components/booking/CalendarComponent.vue";
</script>

<template>
  <div class="booking-page">
    <h1 class="h1">Réservations</h1>
    <div class="booking-page__row">
      <CalendarComponent :available="calendar" />
      <div class="booking-page__coords">
        <p class="booking-page__coords__small">Où nous trouver:</p>
        <p class="booking-page__coords__big">1 Chem. du Restaurant, 99000 Ville</p>
        <p class="booking-page__coords__small">Contact:</p>
        <p class="booking-page__coords__big">04 12 34 56 78</p>
        <img src="/icons/passionnee-line.png" alt="" class="booking-page__coords__line">
      </div>
    </div>
    <div class="booking-page__bottom-spacing"></div>
    <div class="booking-page__map">
      <iframe
          style="border:0"
          loading="lazy"
          height="100%"
          width="100%"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAFsTBIlPQc6n4ZesBNK0S81MA75TGhDlY
    &q=Chem.+du+Restaurant,+Saint-Alexis-des-Monts,+QC+J0K+1V0,+Canada"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      calendar: {
        'monday_start': 11,
        'monday_end': 22,
        'tuesday_start': 11,
        'tuesday_end': 22,
        'wednesday_start': 11,
        'wednesday_end': 22,
        'thursday_start': 11,
        'thursday_end': 22,
        'friday_start': 11,
        'friday_end': 23,
        'saturday_start': 10,
        'saturday_end': 23,
        'sunday_start': 10,
        'sunday_end': 21
      }
    }
  }
}
</script>

<style scoped>

.booking-page {
  padding: 75px 1.5rem 0 1.5rem;

  width: 100%;
  max-width: 1300px;
}

.booking-page__row {
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  width: 100%;
}

.booking-page__coords {
  max-width: 500px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
}

.booking-page__coords__small {
  font-size: calc(var(--font-size) * 0.8);
  color: gray;
}

.booking-page__coords__big {
  font-size: calc(var(--h6-font-size));
}

.booking-page__coords__line {
  width: 165px;
  margin-top: -20px;
}

.booking-page__bottom-spacing {
  height: 60px;
  width: 1px;
}

.booking-page__map {
  height: 300px;
  width: 100%;
}

@media (max-width: 1100px) {
  .booking-page__row {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    gap: 3rem;
  }
}

</style>