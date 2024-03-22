import Cart from '../pages/Cart'
import Home from '../pages/Home'
import config from '../config'

const publicRoutes = [
    {
        path: config.routes.home, 
        component: Home,
    },

    {
        path: config.routes.following,
        component: Cart,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };