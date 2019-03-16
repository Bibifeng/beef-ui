<template>
  <div id="app">
    <p>带线条效果的btn1</p>
    <bf-btn1></bf-btn1>
  </div>
</template>

<script>

  import btn1 from './packages/button/btn1/btn1.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
      'bf-btn1':btn1
  }
}
</script>

<style lang="scss">
#app{
  margin-left: 150px;
  margin-top: 150px;
}
</style>
