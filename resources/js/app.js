require('./bootstrap');

window.Vue = require('vue');
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import {routes} from './routes';
import StoreData from './store';
import MainApp from './components/MainApp.vue';

Vue.use(Vuex);
Vue.use(Vuetify);
Vue.use(VueRouter);

const store = new Vuex.Store(StoreData);

const router = new VueRouter({
    routes,
    mode : 'history'
});

Vue.component('admin-app', require('./components/admin/AdminApp.vue').default);

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const currentUser = store.state.currentUser;

    if(requiresAuth && !currentUser){
        next('/login');
    } else if(to.path == '/login' && currentUser){
        next('/');
    } else {
        next();
    }
})

const app = new Vue({
    el: '#app',
    router,
    store,
    vuetify: new Vuetify(),
    components : {
        MainApp
    }
});