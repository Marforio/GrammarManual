import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Contact from '../views/Contact.vue';
import ch1 from '../views/ch1.vue';
import ch2 from '../views/ch2.vue';
import ch3 from '../views/ch3.vue';
import ch4 from '../views/ch4.vue';
import ch5 from '../views/ch5.vue';
import ch6 from '../views/ch6.vue';
import ch7 from '../views/ch7.vue';
import ch8 from '../views/ch8.vue';
import ch9 from '../views/ch9.vue';
import ch10 from '../views/ch10.vue';
import ch11 from '../views/ch11.vue';
import ch12 from '../views/ch12.vue';
import ch13 from '../views/ch13.vue';
import ch14 from '../views/ch14.vue';
import ch15 from '../views/ch15.vue';
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/About.vue')
        },
        {
            path: '/contact',
            name: 'about',
            component: Contact
        },
        {
            path: '/ch1',
            name: 'ch1',
            component: ch1
        },
        {
            path: '/ch2',
            name: 'ch2',
            component: ch2
        },
        {
            path: '/ch3',
            name: 'ch3',
            component: ch3
        },
        {
            path: '/ch4',
            name: 'ch4',
            component: ch4
        },
        {
            path: '/ch5',
            name: 'ch5',
            component: ch5
        },
        {
            path: '/ch6',
            name: 'ch6',
            component: ch6
        },
        {
            path: '/ch7',
            name: 'ch7',
            component: ch7
        },
        {
            path: '/ch8',
            name: 'ch8',
            component: ch8
        },
        {
            path: '/ch9',
            name: 'ch9',
            component: ch9
        },
        {
            path: '/ch10',
            name: 'ch10',
            component: ch10
        },
        {
            path: '/ch11',
            name: 'ch11',
            component: ch11
        },
        {
            path: '/ch12',
            name: 'ch12',
            component: ch12
        },
        {
            path: '/ch13',
            name: 'ch13',
            component: ch13
        },
        {
            path: '/ch14',
            name: 'ch14',
            component: ch14
        },
        {
            path: '/ch15',
            name: 'ch15',
            component: ch15
        }
    ]
});
export default router;
