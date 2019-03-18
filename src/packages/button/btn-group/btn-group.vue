<template>
    <div class="bf-btn-group">
      <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'bf-btn-group',
        data(){
            return {}
        }
    }
</script>

<style lang="scss">
  .bf-btn-group{
    display: inline-flex;
    vertical-align: middle;
    > .bf-btn{
      border-radius: 0;
      margin-left: -1px;
      &:first-child{
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      &:last-child{
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
      &:hover{
        position: relative;
        z-index: 1;
      }
    }
  }
</style>
