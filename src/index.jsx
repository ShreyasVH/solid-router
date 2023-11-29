/* @refresh reload */
import { render } from 'solid-js/web'
import { Router, useRoutes } from "@solidjs/router";
import routes from './routes';

const root = document.getElementById('root')

render(() => {
    const Routes = useRoutes(routes);
    return (
        <Router>
            <Routes />
        </Router>
    )
}, root)
