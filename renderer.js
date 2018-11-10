// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const Vue = require('vue/dist/vue.common.js')

const app = new Vue({
    el: '#app',
    data: {
        node_version: process.versions.node
    }
})