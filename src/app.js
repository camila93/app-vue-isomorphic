import Vue from 'vue'

import App from './App.vue'

export function createApp() {
    const app = new Vue({
        //h hyperscript = que monta o virtual dom
        render: h => h(App)
    })
    return {app}
}