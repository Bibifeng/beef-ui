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
        },
        mounted(){
          for( let node of this.$el.children){
              let name = node.nodeName.toLowerCase();
            if(name !== 'button'){
                console.warn(`bf-btn-group的子元素应该是bf-btn,您写的${name}不应该出现在该位置`)
            }
          }
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
