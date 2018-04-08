<template>
  <div id="index">

  </div>
</template>

<script>
import UiRadioButton from '@/ui-lib/src/radio-button'
import UiRadioButtonGroup from '@/ui-lib/src/radio-group'

export default {
  name: 'index',
  components: {
    UiRadioButton,
    UiRadioButtonGroup
  },
  mounted: function () {
    // logTitle()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
