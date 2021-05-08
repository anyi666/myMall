import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Navigation = () => import('views/navigation/Navigation')
const My = () => import('views/my/My')
const List = () => import('views/list/List')
const Gift = () => import('views/gift/Gift')

Vue.use(VueRouter)

const routes = [{
		// 此方式首页后缀显示/#/不美观
		// path: '',
		// component:Home
		path: '',
		redirect: '/home' //重定向
	},
	{
		path: '/home',
		name: 'Home',
		component: Home
	},
	{
		path: '/my',
		name: 'My',
		component: My
	},
	{
		path: '/gift',
		name: 'Gift',
		component: Gift
	},
	{
		path: '/navigation',
		name: 'Navigation',
		component: Navigation
	},
	{
		path: '/list',
		name: 'List',
		component: List
	}
]

const router = new VueRouter({
	routes,
	mode: 'history'
})

export default router
