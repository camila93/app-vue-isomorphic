import { createApp } from './app.js';

export default context => {
    const { app, store } = createApp();

    context.rendered = () => {
        context.state = store.state
    }

    return app;
}