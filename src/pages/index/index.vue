<template>
  <div id="app">
    <img src="../../assets/logo.png">
    <p> this is index </p>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from '../../components/HelloWorld'
import {logTitle} from '../../assets/js/base'

export default {
  name: 'index',
  components: {
    HelloWorld
  },
  mounted: function () {
    logTitle()
  }
}
</script>

<style>
@import '../../assets/css/base.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
