<template>
  <div id="first">
    <!-- <img src="../../assets/logo.png"> -->
    <p> this is first</p>
    hello wtf
    <!-- <HelloWorld/> -->
  </div>
</template>

<script>
// import HelloWorld from '../../components/HelloWorld'
// import {logTitle} from '../../assets/js/base'

export default {
  name: 'first',
  components: {
    // HelloWorld
  },
  mounted: function () {
    // logTitle();
  }
}
</script>

<style lang="less" scoped>
@import '../../../assets/css/middleware.less';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
