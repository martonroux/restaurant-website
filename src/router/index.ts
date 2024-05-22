// src/router.ts
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "../views/pages/HomePage.vue";
import MenuPage from "../views/pages/MenuPage.vue";
import AboutPage from "../views/pages/AboutPage.vue";
import ContactPage from "../views/pages/ContactPage.vue";
import BookingPage from "../views/pages/BookingPage.vue";

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
            path: '/about',
            name: 'A Propos',
            component: AboutPage,
        },
        {
            path: '/contact',
            name: 'Contact',
            component: ContactPage,
        }
    ],
    history: createWebHistory(),
    scrollBehavior() {
        return { top: 0 };
    }
});

export default router;
