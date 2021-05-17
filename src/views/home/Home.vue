<template>
	<div class="home">
		<nav-bar class="home-navbar">
			<div slot="center">购物街</div>
		</nav-bar>
		<tab-control :titles="['流行','新款','精选']" 
											class="tabConrtol" 
											@tabClick="tabClick"
											ref="tabControl1"
											v-show="isTabFixed"></tab-control>
		<bs class="wrapper" ref="wrapper" :probe-type="3" @scroll="contentScroll" :pullUpLoad="true" @pullingUp="loadMore">
				<!-- <swiper-item :banners="banners"></swiper-item> -->
				<recommend :recommends="recommends"></recommend>
				<feature></feature>
				<tab-control :titles="['流行','新款','精选']" 
											@tabClick="tabClick"
											ref="tabControl2"></tab-control>
				<goods-list :goods="showGoods"/>
		</bs>

		<back-top @click.native="backClick" v-show="isShowBackBtn"/>
	</div>
</template>

<script>
	import SwiperItem from 'views/home/childComps/SwiperItem'
	import Recommend from 'views/home/childComps/Recommend'
	import Feature from 'views/home/childComps/Feature'

	import NavBar from 'components/common/navbar/Navbar'
	import TabControl from 'components/content/tabControl/TabControl'
	import GoodsList from 'components/content/goods/GoodsList'
	import BackTop from 'components/content/backTop/BackTop'

	import Bs from 'components/common/scroll/Scroll'

	import {
		getHomeMultidata,
		getHomeGoods
	} from "network/home";

	export default {
		name: 'Home',
		components: {
			SwiperItem,
			Recommend,
			Feature,
			NavBar,
			TabControl,
			GoodsList,
			Bs,
			BackTop
		},
		data() {
			return {
				banners: [],
				recommends: [],
				goods: {
					'pop': {
						page: 0,
						list: []
					},
					'new': {
						page: 0,
						list: []
					},
					'sell': {
						page: 0,
						list: []
					},
				},
				currentType: 'pop',
				isShowBackBtn: false,
				isTabFixed: false
			}
		},
		created() {
			this.getHomeMultidata()
			this.getHomeGoods('pop')
			this.getHomeGoods('new')
			this.getHomeGoods('sell')
		},
		mounted() {
			//监听item中图片加载完成
			// const refresh = this.debounce(this.$refs.wrapper.refresh,1000)
			// this.$bus.$on('imageLoad', () => {
			// 	this.$refs.wrapper.refresh()
			// 	refresh()
			// })
			this.$refs.wrapper.refresh()

			//获取tabControl的offsetTop
			//所有的组件都有一个属性$el: 用于获取组件中的元素
			console.log(this.$refs.tabControl2.$el.offsetTop)
			
			
		},
		methods: {
			/**
			 * 事件监听相关
			 */
			
			// 防抖函数
			// 	debounce(func, delay) {
			// 		let timer = null
			// 		return function(...args) {
			// 			if(timer) clearTimeout(timer)
						
			// 			timer = setTimeout(() => {
			// 				func.apply(this, args)
			// 			}, delay)
			// 		}
			// 	},	
			tabClick(index) {
				switch (index) {
					case 0:
						this.currentType = 'pop'
						break
					case 1:
						this.currentType = 'new'
						break
					case 2:
						this.currentType = 'sell'
						break
				}
				this.$refs.tabControl1.currentIndex = index
				this.$refs.tabControl2.currentIndex = index

			},
			backClick() {
				this.$refs.wrapper.scrollTo(0,0)
			},
			contentScroll(position) {
				// 判断BackTop是否显示
				this.isShowBackBtn = (-position.y) > 1000
				//判断tabControl是否吸顶（position：fixed）
				this.isTabFixed = (-position.y) > this.$refs.tabControl2.$el.offsetTop
			},
			
			loadMore() {
				this.getHomeGoods(this.currentType)
			},
			
			/**
			 * 网络请求相关
			 */
			getHomeMultidata() {
				getHomeMultidata().then(res => {
					this.banners = res.data.data.banner.list;
					this.recommends = res.data.data.recommend.list;
				})
			},
			getHomeGoods(type) {
				let page = this.goods[type].page +1
				getHomeGoods(type, page).then(res => {
					this.goods[type].list.push(...res.data.data.list)
					this.goods[type].page += 1
					// 完成一次上拉加载更多进行下一次
					this.$refs.wrapper.finishPullUp()
				})
			}
		},
		computed: {
			showGoods() {
				return this.goods[this.currentType].list
			}
		}

	}
</script>

<style scoped>
	.home {
		height: 100vh;
		position: relative;
	}
	.home-navbar {
		background-color: pink;
		color: #fff;
	
	}

	.tab-control {
		 position: relative; 
		 z-index: 9;
	} 
	
	.wrapper {
		position: absolute;
		/* height: calc(100% - 84px); */
		overflow: hidden;
		top: 44px;
		bottom:40px;
		left: 0;
		right: 0;
	}

</style>
