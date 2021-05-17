import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Navigation = () => import('views/navigation/Navigation')
const My = () => import('views/my/My')
const List = () => import('views/list/List')
const Category = () => import('views/category/Category')
const Detail = () => import('views/detail/Detail')

//解决在VUE中路由遇到Error: Avoided redundant navigation to current location:报错显示是路由重复
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

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
		component: Home,
		meta: {
			showTab: true
		}
	},
	{
		path: '/my',
		name: 'My',
		component: My,
		meta: {
			showTab: true
		}
	},
	{
		path: '/category',
		name: 'Category',
		component: Category,
		meta: {
			showTab: true
		}
	},
	{
		path: '/navigation',
		name: 'Navigation',
		component: Navigation,
		meta: {
			showTab: true
		}
	},
	{
		path: '/list',
		name: 'List',
		component: List,
		meta: {
			showTab: true
		}
	},
	{
		path: '/detail/:id',
		name: 'Detail',
		component: Detail,
		meta: {
			showTab: false
		}
	}
]

const router = new VueRouter({
	routes,
	mode: 'history'
})

export default router
