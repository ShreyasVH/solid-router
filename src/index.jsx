/* @refresh reload */
import { render } from 'solid-js/web'
import { Router, Route } from "@solidjs/router";
import routes from './routes';

const root = document.getElementById('root')

render(() => {
    return (
        <Router>
            <For each={routes}>{route =>
                <Route path={route.path} component={route.component} />
            }</For>
        </Router>
    )
}, root)
