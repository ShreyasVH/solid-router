import Home from './containers/home'
import Page1 from './containers/page1'
import Page2 from './containers/page2'

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/page1",
        component: Page1
    },
    {
        path: "/page2",
        component: Page2
    }
];

export default routes;