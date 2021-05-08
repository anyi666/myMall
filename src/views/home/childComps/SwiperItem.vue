<template>
	<div class="wrapper">
		<swiper :options="swiperOptions">
			<swiper-slide v-for="item in banners" :key="item.label">
				<img :src="item.image" alt="">
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	
	export default {
		name: 'mySwiper',
		props: {
			banners: {
				type: Array,
				default() {
					return []
				}
			}
		},
		data() {
			return {
				swiperOptions: {
					pagination: '.swiper-pagination',
					loop:true,
					autoplay: 1200
				}
			}
		},

	}
</script>

<style scoped>

.wrapper img{
	width: 100%;
}
</style>
