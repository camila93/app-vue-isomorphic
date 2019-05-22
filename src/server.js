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

app.get('*', (req, res) => {
    // É possível injetar no momento da renderização do servidor,
    // dados dentro do template.html e
    // da aplicação vue por meio do objeto context
    const context = {
        title: 'Aplicação Vue.js Isomórfica'
    }

    renderer.renderToString(context, (error, html) => {
        res.send(html)
    })
})

app.listen(8080, () => {
    console.log('Server is up to port: 8080')
})