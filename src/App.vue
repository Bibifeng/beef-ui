<template>
  <div id="app">
    <div class="box">
      <bf-btn1></bf-btn1>
    </div>
  </div>
</template>

<script>

  import btn1 from './packages/button/btn1/btn1.vue'

export default {
  name: 'app',
  data () {
    return {

    }
  },
  components:{
      'bf-btn1':btn1
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
