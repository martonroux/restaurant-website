<script setup>

</script>

<template>
  <div class="site-footer">
    <div class="site-footer__contact">
      <p>Contact:</p>
      <div class="site-footer__contact__col">
        <p>+33 4 12 34 56 78</p>
        <p>fictional-website.zzz</p>
        <p>1 Chem. du Restaurant, 99000 Ville</p>
      </div>
    </div>
    <div class="site-footer__legal">
      <router-link to="/privacy-policy">Mentions légales</router-link>
      <router-link to="/terms-of-service">Conditions d'utilisation</router-link>
      <p>&copy; 2024 MARTON ROUX. All rights reserved.</p>
    </div>
  </div>
</template>

<style scoped>

.site-footer {
  padding: 0.2rem 1rem;
  background-color: var(--white-secondary-color);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.site-footer p,
.site-footer a {
  font-size: calc(var(--font-size) * 0.8);
  color: gray;
}

.site-footer__contact {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
}

.site-footer__contact__col p {
  margin: 0.1rem;
}

.site-footer__legal > * {
  margin: 0.1rem 0.5rem;
}

@media (max-width: 700px) {
  .site-footer {
    flex-direction: column;
    gap: 1rem;
  }
}

</style>