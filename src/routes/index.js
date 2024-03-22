import Cart from '../pages/Cart'
import Home from '../pages/Home'
import config from '../config'
import Login from '../pages/login';

const publicRoutes = [
    {
        path: config.routes.home, 
        component: Home,
    },

    {
        path: config.routes.following,
        component: Cart,
    },

    {
        path: config.routes.login,
        component: Login,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };