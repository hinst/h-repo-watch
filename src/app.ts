console.log('Now starting app...')

const Vue = require('vue/dist/vue.common.js')

const app = new Vue({
    el: '#app',
    data: {
        node_version: process.versions.node
    }
})