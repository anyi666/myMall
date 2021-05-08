<template>
	<div class="recommend">
		<div class="recommend-item" v-for="item in recommends" :key="item.label">
			<img :src="item.image" alt="">
			<div>{{item.title}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'RecommendView',
		props: {
			recommends: {
				type: Array,
				dafault() {
					return []
				}
			}
		}
	}
</script>

<style scoped>
	.recommend{
		display: flex;
		text-align: center;
		justify-content: space-around;
		border-bottom: 6px solid #f4f4f4;
	}
	.recommend img{
		width: 100%;
	}
	.recommend-item{
		width: 70px;
		padding:16px 0;
		
	}
</style>
