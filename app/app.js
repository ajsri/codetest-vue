import Vue from 'vue'
import testItem from './components/header'

Vue.component('header-item', {
	template: '<div style="background: red;">{{msg}}</div>',
	props: ['msg']
});

let app = new Vue({
	el: '#pointers',
	data: {
		message: 'Testing props in Vue'
	}
})

console.dir(testItem)