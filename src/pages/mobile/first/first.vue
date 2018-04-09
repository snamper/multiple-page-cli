<template>
  <div id="first">
    <div>
      <p>{{list.name}}</p>
      <p>{{list.key}}</p>
      <p>{{list.value}}</p>
      <div>
        {{list.skus[0]}}
      </div>

      <p>-----------------------</p>
      <div v-for="(row, index) in list.skus">
        {{row.key}} --- {{row.value}}
        <button @click="add(row)">btn-{{row.key}}</button>
        <ui-input-number v-model="row.key"/>
      </div>
    </div>
  </div>
</template>

<script>
import UiInputNumber from '@/ui-lib/src/input-number'

export default {
  name: 'first',
  components: {
    UiInputNumber
  },
  data() {
    return {
      list: {
        name: 'list',
        key: 'pro',
        value: 'no.6',
        skus: [
          {
            key: 0,
            value: 'one',
          },
          {
            key: 1,
            value: 'two',
          },
        ]
      }
    }
  },
  methods: {
    add(item) {
      item.key++;

    }
  },
  mounted: function () {
    // logTitle();
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
