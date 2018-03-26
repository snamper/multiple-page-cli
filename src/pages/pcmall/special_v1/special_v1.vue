<template>
<div id="special_v1" class="container">
  <specialHeaderNav/>
  temp1
  <i class="icon icon-home"></i>
</div>
</template>

<script>
import specialHeaderNav from '@/components/special_header_nav'

export default {
  // 新专题模板v1
  name: 'special_v1',
  components: {specialHeaderNav},
  data() {
    return {

    }
  },
  methods: {

  },
  mounted: function() {
    // 关于SEO，想使用nuxt的，暂时搭不出来。用渲染方式顶着。。
  }
}
</script>

<style lang="scss" scoped>

</style>
