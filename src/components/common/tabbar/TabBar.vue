<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'TabBar',
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
  #tabbar {
    display: flex;
    justify-content: space-around;
    background-color: #f4f4f4;
    box-shadow: 0px -1px 1px 1px rgba(100, 100, 100, .1);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }

</style>
