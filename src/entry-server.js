import { createApp } from './app.js';

export default context => {
    const { app, store } = createApp();

    context.rendered = () => {
        context.state = {
            ...store.state,
            ...context.state
        }
    }

    store.replaceState({
        ...store.state,
        ...context.state
    })

    return app;
}