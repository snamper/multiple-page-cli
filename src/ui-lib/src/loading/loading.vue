<template>
  <transition name="ui-loading-fade">
    <div class="ui-loading">
      <div class="ui-loading__wrapper">
        <i class="icon icon-loading"></i>
        <p>{{text}}</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      text: '加载中，请稍候'
    }
  }
}
</script>

<style scoped>
.icon {
  /* position: absolute; */
  /* display: block; */
  display: inline-block;
  height: 40px;
  width: 40px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.icon-loading {
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  left: 50%;
  transform: translateX(-50%);
  background-image: url('./icon_loading.gif');
}

.ui-loading{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100000;
  /* background: rgba(102, 102, 102, .6); */
}
.ui-loading__wrapper {
  height: 100px;
  width: 100px;
  border-radius: 6px;
  text-align: center;
  padding-top: 20px;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(102, 102, 102, .6);  
}

.ui-loading-fade-enter {

}
.ui-loading-fade-active {
  
}
</style>
