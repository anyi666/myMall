<template>
	<div class="goods-list-item" @click="GoodsItemClick">
		<img :src="goodsItem.show.img" alt="">
		<p class="title" >{{goodsItem.title}}</p>
		<div class="bottom">
			<span class="price">{{goodsItem.price}}</span>
			<span class="goodsPic"><img src="~assets/img/imgs/dh.png" alt=""></span>
			<span>{{goodsItem.cfav}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'GoodsListItem',
		props: {
			goodsItem: {
				type:Object,
				default() {
					return {}
				}
			}
		},
		data() {
			return {
				isShow: true,
			}
		},
		methods: {
			GoodsItemClick() {
				this.$router.push('/detail/' + this.goodsItem.iid)
			},
			titleMouseover() {
				console.log(1213123)
			}
		}
		// 监测图片加载方法使用事件总线传递给home组件
		// methods: {
		// 		imageLoad() {
		// 			this.$bus.$emit('imageLoad')
		// 	}
		// }
	}
</script>

<style scoped>
	.goods-list-item{
		width: 48%;
	}
	.goods-list-item img{
		width: 100%;
		vertical-align: middle;
		border-radius: 5px;
	}
	.goodsPic img{
		width:16px;
	}
	.price{
		color:hotpink;
		padding-right:10px;
	}
	.bottom{
		/* display: flex; */
		text-align: center;
	}
	.title{
		width: 100%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

</style>
