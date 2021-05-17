<template>
  <nav-bar>
    <div class="nav-bar-left" slot="left" @click="backClick">&lt</div>
    <div class="nav-bar-center" slot="center">
      <span v-for="(item,index) in titles" 
            @click="detailNavClick(index)" 
            :class="{active: index===currentIndex}">{{item}}</span>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/Navbar";

export default {
  name: "DetailNavBar",
  components: {
      NavBar
  },
  data() {
      return {
          titles: ['商品','参数','评论','推荐'],
          currentIndex: 0   
      }
  },
  methods: {
      detailNavClick(index) {
          this.currentIndex = index
      },
      backClick() {
          this.$router.go(-1)
      }
  }
};
</script>

<style scoped>
.nav-bar-center{
    display: flex;
    justify-content: space-between;
}
.nav-bar-left{
    font-size: 26px;
}
.active{
    color:palevioletred
}
</style>