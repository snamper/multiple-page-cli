<template>
  <div id="index">
    <!-- <ui-radio-button-group v-model="result"> -->
      <ui-radio-button v-model="result" v-for="row in list" :key="row.v" :label="row.t">
        {{row.t}}
      </ui-radio-button>
    <!-- </ui-radio-button-group> -->

    <ui-radio-button-group v-model="result">
      <ui-radio-button v-for="row in list" :key="row.v" :label="row.t">
        {{row.t}}
      </ui-radio-button>
    </ui-radio-button-group>
    {{result}}

    <ui-button type="confirm" size="small">
      这是按钮
    </ui-button>
    <ui-button disabled>
      这是禁用的按钮
    </ui-button>
        <ui-button type="confirm" size="small">
      这是按钮
    </ui-button>
  </div>
</template>

<script>
import UiRadioButton from '@/ui-lib/src/radio-button'
import UiRadioButtonGroup from '@/ui-lib/src/radio-group'
import UiButton from '@/ui-lib/src/button'

export default {
  name: 'index',
  data() {
    return {
      result: 0,
      list: [
        {
          t: '这是A',
          v: 0
        },
        {
          t: '这是B',
          v: 1
        },
        {
          t: '这是C',
          v: 2
        },
      ]
    }
  },
  components: {
    UiRadioButton,
    UiRadioButtonGroup,
    UiButton,
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
