const { createBundleRenderer } = require('vue-server-renderer')
const express = require('express')
const path = require('path')
const fs = require('fs')

const resolve = file => path.resolve(__dirname, file)

const app = express()

app.use('/dist', express.static(__dirname  + '/../dist'))

const createRenderer = function (ssrBundle, options) {
    return createBundleRenderer(ssrBundle, options)
}

const templatePath = resolve('./index.html')
const template = fs.readFileSync(templatePath, 'utf-8')
const clientManifest = require('../dist/vue-ssr-client-manifest.json')
const ssrBundle = require('../dist/vue-ssr-server-bundle.json')

let renderer = createRenderer(ssrBundle, {
    template,
    clientManifest
})

app.get('/app', (req, res) => {
    renderer.renderToString({}, (error, html) => {
        res.send(html)
    })
})

app.listen(8080, () => {
    console.log('Server is up to port 8080')
})