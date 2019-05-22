const axios = require('axios')
const { createBundleRenderer } = require('vue-server-renderer')
const express = require('express')
const path = require('path')
const fs = require('fs')
const resolve = file => path.resolve(__dirname, file)
const app = express()

app.use('/dist', express.static(resolve('../dist')))

const createRenderer = function (serverBundle, options) {
    return createBundleRenderer(serverBundle, options)
}

// Template onde será inserido o Server Bundle e link <script> do Client Bundle
const template = fs.readFileSync(resolve('./index.html'), 'utf-8')

// Manifesto com informações para injetar link <script> do Client Bundle
const clientManifest = require('../dist/vue-ssr-client-manifest.json')

// Server Bundle
const serverBundle = require('../dist/vue-ssr-server-bundle.json')

let renderer = createRenderer(serverBundle, {
    template,
    clientManifest
})

app.get('*', async (req, res) => {
    let purpleFruits = []

    await axios.get('http://www.mocky.io/v2/5ce4a6643100004ab8742d8a')
        .then(response => {
            purpleFruits = response.data.purpleFruits
        })

    const context = {
        title: 'Aplicação Vue.js Isomórfica',
        state: {
            purpleFruits
        }
    }

    renderer.renderToString(context, (error, html) => {
        res.send(html)
    })
})

app.listen(8080, () => {
    console.log('Server is up to port: 8080')
})