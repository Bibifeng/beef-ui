<template>
    <div class="row">
      <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'bf-row',
        data(){
            return {}
        }
    }
</script>

<style lang="scss" scoped>
  .row{
    display: flex;
  }
</style>
