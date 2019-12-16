import Home from './components/Home.vue';
import Login from './components/auth/Login.vue';
import AdminApp from './components/admin/AdminApp.vue';

export const routes = [
    { 
        path : '/', 
        component : Home, 
        meta: { 
            requiresAuth: true
        }
    },
    { 
        path : '/login', 
        component : Login
    },
    { 
        path : '/admin/AdminApp', 
        component : AdminApp
    },
]


