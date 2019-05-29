import { createApp } from './app.js';

export default context => {
    const { app, store } = createApp();

    context.rendered = () => {
        // Merge do Vuex (Populaod após renderização da aplicação)
        // com o state do contexto do server.
        // Obs: Necessário para o processo de hydration.
        context.state = {
            ...store.state,
            ...context.state
        }
    }

    // Merge do state do contexto do server/express com estado inicial do Vuex.
    store.replaceState({
        ...store.state,
        ...context.state
    })

    return app;
}