<template>
  <div class="itemInfo" v-if="Object.keys(goods).length !== 0">
          <div class="title">{{goods.title}}</div>
          <div class="price">
              <span class="lowNowPrice">{{goods.newPrice}}</span>
              <span class="lowPrice">{{goods.oldPrice}}</span>
              <span class="priceTitle" v-if="goods.discount">{{goods.discountDesc}}</span>
          </div>
          <div class="value" v-if="goods.columns">
              <span v-for="item in goods.columns">{{item}}</span>
          </div>
          <div class="affterSale">
              <span v-for="item in goods.services">
                    <span class="shopInfoIcon">
                        <img :src="item.icon" alt="">
                    </span>
                    
                    <span>{{item.name}}</span>
              </span>
          </div>
          <div class="shopInfo" v-if="Object.keys(shop).length !== 0">
              <div class="shopHome">
                  <img class="shopLogo" :src="shop.logo">
                  <span class="shopName">{{shop.name}}</span>
              </div>
              <div class="shopServe">
                  <div class="csells">
                      <p>{{shop.sells | sellCountFilter}}</p>
                      <p>总销量</p>
                  </div>
                  <div class="cgoods">
                      <p>{{shop.goodsCount}}</p>
                      <p>全部宝贝</p>
                  </div>
                  <div class="cutLine"></div>
                  <div class="score">
                      <p v-for="item in shop.score" class="scoreContent">
                          <span>{{item.name}}</span>
                          <span class="serveScore">{{item.score}}</span>
                          <span v-if="!item.isBetter" class="scoreDi">低</span>
                          <span v-else class="scoreGao">高</span>
                      </p>
                  </div>
              </div>
              <button class="entrance">进店逛逛</button>
          </div>
          
      </div>
</template>

<script>
export default {
    name: 'DetailGoodsInfo',
    props: {
        goods: {
            type: Object,
            default: {}
        },
        shop: {
            type: Object,
            default: {}
        }
    },
    filters: {
        sellCountFilter: function (value) {
            if(value < 10000) return value;
            return (value/10000).toFixed(1) + '万'
        }
    },
    
}
</script>

<style scoped>
.title{
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.price{
    padding:14px 0;
}
.lowNowPrice{
    color: crimson;
    font-size: 20px;
}
.lowPrice{
    padding-left: 10px;
    text-decoration: line-through;
    color: #ccc;
}
.priceTitle{
    vertical-align: top;
    background-color: crimson;
    color: #fff;
    padding: 2px;
    border-radius: 25px;
    font-size: 14px;
}
.value{
    display: flex;
    color: #ccc;
    font-size: 14px;
    justify-content: space-between;
    padding-bottom: 8px;
    border-bottom: 2px solid rgba(100,100,100,.1);
}
.affterSale{
    display: flex;
    color: #000;
    font-size: 14px;
    justify-content: space-around;
    padding-top: 18px;
    padding-bottom: 30px;
    border-bottom: 2px solid rgba(100,100,100,.1);
}
.affterSale span{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.shopInfoIcon{
    display: inline-block;
    width: 16px;
    vertical-align: middle;
}
.shopInfoIcon img{
    width: 100%
}
.shopHome{
    padding: 10px 6px;
    display: flex;
    align-items: center;
}
.shopLogo{
    width: 40px;
    height: 40px;
    vertical-align: middle;
}
.shopLogo img {
    width: 100%;
}
.shopName {
    color: rgba(0, 0, 0, 0.548);
    padding-left: 10px;
}
.shopServe{
    display: flex;
    font-size: 14px;
    align-items: center;
}
.csells,
.cgoods{
    flex:1;
    text-align: center;
}
.cutLine{
    height: 36px;
    width: 1px;
    background-color: #ccc;
}
.score{
    flex:2;
    text-align: center;
}
.scoreDi,
.scoreGao{
    color:#fff;
}
.scoreDi{
    background-color: green;    
}
.scoreGao{
    background-color: hotpink;
}
.scoreContent{
    display: flex;
    justify-content: space-evenly;
    padding: 2px 0;
}
.serveScore{
    width: 8px;
    margin-right: 10px;
}
.entrance{
    display: block;
    margin: 10px auto;
    background-color: rgba(0, 0, 255, 0.082);
    border: none;
    width: 160px;
    padding: 6px;
    border-radius: 25px;
    font-size: 16px;
}
</style>