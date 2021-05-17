import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)

Vue.prototype.$bus = new Vue()

new Vue({
	render: h => h(App),
	router
}).$mount('#app')
