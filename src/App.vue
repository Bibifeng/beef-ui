<template>
  <div id="app">
    <div class="box">
      <bf-btn-line></bf-btn-line>
    </div>
    <div class="box">
      <bf-btn>按钮二</bf-btn>
      <bf-btn :loading="loading1" @click="loading1 = !loading1">按钮二</bf-btn>
      <bf-btn icon="settings">按钮二</bf-btn>
      <bf-btn icon="settings" :loading="true">按钮二</bf-btn>
      <bf-btn icon="like" icon-position="right">按钮二</bf-btn>
      <bf-btn icon="like" icon-position="right" :loading="true">按钮二</bf-btn>
    </div>
    <div class="box">
      <bf-icon icon-name="download"></bf-icon>
    </div>
  </div>
</template>

<script>

  import btn1 from './packages/button/btn1/btn1.vue'
  import btn2 from './packages/button/btn2/btn2.vue'
  import bfIcon from './packages/icon/bficon.vue'
export default {
  name: 'app',
  data () {
    return {
        'loading1':false,
    }
  },
  components:{
      'bf-btn-line': btn1,
      'bf-btn': btn2,
    'bf-icon': bfIcon,
  }
}
</script>

<style lang="scss">

  /*为了开发方便，后期酌情删除*/
  #app{
  margin-left: 150px;
  margin-top: 50px;
  }
  .box{
    margin-top: 20px;
  }
  /*  ------结束-------- */

</style>
