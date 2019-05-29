import { createApp } from './app.js'

const { app, store } = createApp()

if (window.__INITIAL_STATE__) {
    // Assume o estado inicial definido para executar o processo de hydration.
    store.replaceState(__INITIAL_STATE__)
}

app.$mount('#app')