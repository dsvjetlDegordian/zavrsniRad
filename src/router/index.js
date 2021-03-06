import Vue from 'vue';
import Router from 'vue-router';

// Components
import Login from '@/components/routeComponents/Login';
import Home from '@/components/routeComponents/Home';
import SongPlayer from '@/components/routeComponents/SongPlayer';
import Info from '@/components/routeComponents/Info';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'login',
            component: Login
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/song/:songId',
            name: 'songPlayer',
            component: SongPlayer
        },
        {
            path: '/info',
            name: 'info',
            component: Info
        }
    ]
});
