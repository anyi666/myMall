<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="blue">
      <img slot="item-icon" src="~assets/img/imgs/home.png" alt="">
      <img slot="item-icon-active" src="~assets/img/imgs/home-active.png" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/my" activeColor="green">
      <img slot="item-icon" src="~assets/img/imgs/my.png" alt="">
      <img slot="item-icon-active" src="~assets/img/imgs/my-active.png" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
    <tab-bar-item path="/list">
      <img slot="item-icon" src="~assets/img/imgs/lb.png" alt="">
      <img slot="item-icon-active" src="~assets/img/imgs/lb-active.png" alt="">
      <div slot="item-text">列表</div>
    </tab-bar-item>
    <tab-bar-item path="/gift">
      <img slot="item-icon" src="~assets/img/imgs/lw.png" alt="">
      <img slot="item-icon-active" src="~assets/img/imgs/lw-active.png" alt="">
      <div slot="item-text">礼物</div>
    </tab-bar-item>
    <tab-bar-item path="/navigation">
      <img slot="item-icon" src="~assets/img/imgs/dh.png" alt="">
      <img slot="item-icon-active" src="~assets/img/imgs/dh-active.png" alt="">
      <div slot="item-text">导航</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from '@/components/common/tabbar/TabBar'
  import TabBarItem from '@/components/common/tabbar/TabBarItem'

  export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
</style>
