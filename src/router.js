import VueRouter from 'vue-router';
import Home from './components/Home';
import Carrinho from './components/Carrinho';
 

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/form',
            name: 'form',
            component: Carrinho
        },
    ]
});