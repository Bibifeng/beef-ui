<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: "bf-tabs-body",
    inject: ['eventBus'],
    created(){
    }
  }
</script>
<style scoped lane="scss">
  .tabs-body {}
</style>
