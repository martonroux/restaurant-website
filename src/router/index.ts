// src/router.ts
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "../views/pages/HomePage.vue";
import MenuPage from "../views/pages/MenuPage.vue";
import BookingPage from "../views/pages/BookingPage.vue";
import TermsOfService from "../views/components/footer/TermsOfService.vue";
import PrivacyPolicy from "../views/components/footer/PrivacyPolicy.vue";

const router = createRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage,
        },
        {
            path: '/menu',
            name: 'Menu',
            component: MenuPage,
        },
        {
            path: '/booking',
            name: 'Réservations',
            component: BookingPage,
        },
        {
            path: '/privacy-policy',
            name: 'Politique de Confidentialité',
            component: PrivacyPolicy
        },
        {
            path: '/terms-of-service',
            name: 'Conditions d\'Utilisation',
            component: TermsOfService
        }
    ],
    history: createWebHistory('/restaurant-website/'),
    scrollBehavior() {
        return { top: 0 };
    }
});

export default router;
