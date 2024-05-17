// src/router.ts
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "../views/pages/HomePage.vue";
import MenuPage from "../views/pages/MenuPage.vue";
import AboutPage from "../views/pages/AboutPage.vue";
import ContactPage from "../views/pages/ContactPage.vue";

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
            path: '/about',
            name: 'About',
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
