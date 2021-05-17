<template>
  <div class="detail">
      <detail-nav-bar class="detail-nav-bar"/>
      <div class="topImage"><img :src="topImages" alt=""></div>
      <detail-goods-info :goods="goods" :shop="shop"/>
      
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'

import {getDetail, Goods , Shop} from 'network/detail';

export default {
    name: "Detail",
    components: {
        DetailNavBar,
        DetailGoodsInfo
    },
    data() {
        return {
            iid: null,
            topImages: null,
            goods: {},
            shop: {}
        }
    },
    created() {
        this.iid = this.$route.params.id

        getDetail(this.iid).then(res => {
            const data = res.data.result;
            this.topImages = res.data.result.itemInfo.topImages[0]

            // 获取商品属性
            this.goods = new Goods(data.itemInfo , data.columns, data.shopInfo.services)

            //获取商家属性
            this.shop = new Shop(data.shopInfo)
        })
        
    },
}
</script>

<style scoped>
.detail-nav-bar{
    position: sticky;
    top: 0;
    left: 0;
    background-color: #fff;
}
.topImage img{
    width: 100%;
}
.itemInfo{
    padding:4px;
}

</style>