<template>
	<div class="home">
		<nav-bar class="home-navbar">
			<div slot="center">购物街</div>
		</nav-bar>
		<swiper-item :banners="banners"></swiper-item>
		<recommend :recommends="recommends"></recommend>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/Navbar'
	import SwiperItem from 'views/home/childComps/SwiperItem'
	import Recommend from 'views/home/childComps/Recommend'

	import {getHomeMultidata} from "network/home";
	
	export default {
		name: 'Home',
		components: {
			NavBar,
			SwiperItem,
			Recommend
		},
		data() {
			return {
				banners: [],
				recommends: [],
			}
		},
		created() {
			getHomeMultidata().then(res => {
				this.banners = res.data.data.banner.list;
				this.recommends = res.data.data.recommend.list;
			})
		},
		
	}
</script>

<style scoped>
	.home-navbar {
		background-color: pink;
		color: #fff;
	}
</style>
