import { createRouter, createWebHistory } from "vue-router";

import SignUpForm from './components/SignUpForm.vue';
import FeaturePage from './components/FeaturePage.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: FeaturePage},
        {path: '/join', component: SignUpForm}
    ]
});

export default router;