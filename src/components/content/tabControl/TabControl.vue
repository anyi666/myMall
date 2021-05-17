<template>
	<div class="tab-control">
		<div class="tab-control-item"
		v-for="(item,index) in titles" 
		:key="item.label"
		:class="{active: index === currentIndex}"
		@click="itemClick(index)">
			<span >{{item}}</span>
		</div>
		
	</div>
	
</template>

<script>
	export default {
		name: 'TabControl',
		props: {
			titles: {
				type: Array,
				default() {
					return []
				}
			}
		},
		data() {
			return {
				currentIndex: 0
			}
		},
		methods: {
			itemClick(index) {
				this.currentIndex = index;
				this.$emit('tabClick', index)
			}
		}
		
	}
</script>

<style scoped>
	.tab-control{
		display: flex;
		justify-content: space-around;
		background-color: #fff;
	}
	.tab-control-item span{
		height: 40px;
		line-height: 40px;
		padding: 5px;
	}
	.active{
		color:hotpink;
	}
	.active span{
		border-bottom: 3px solid hotpink;
	}
	
</style>
