<template>
	<div class="goods">
		<goods-list-item v-for="item in goods" :key="item.label" :goods-item="item" />
	</div>
</template>

<script>
	import GoodsListItem from './GoodsListItem.vue'
	export default {
		name: 'GoodsList',
		components: {
			GoodsListItem
		},
		props: {
			goods: {
				type: Array,
				default() {
					return []
				}
			}
		},
	}
</script>

<style scoped>
	.goods{
		margin: 4px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
</style>
