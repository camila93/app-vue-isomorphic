import { createApp } from './app.js'

const { app, store } = createApp()

if (window.__INITIAL_STATE__) {
    store.replaceState(__INITIAL_STATE__)
}

app.$mount('#app')