import Vue from 'vue'

let template = `
    <h1>testing template syntax</h1>
`
let testItem = Vue.component('test-item', {
    props: ['test'],
    template: template 
})

export default testItem