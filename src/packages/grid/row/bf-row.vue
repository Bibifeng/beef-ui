<template>
    <div class="row" :style="rowStyle" :class="rowClass">
      <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'bf-row',
        data(){
            return {}
        },
        props:{
            gutter:{
                type:[Number,String]
            },
            align:{
                type:[String],
                validator(val){
                    return ['left','right','center'].includes(val)
                }
            }
        },
      computed:{
        rowStyle(){
            let{gutter} = this
            return {
              marginLeft: -gutter/2+'px',
              marginRight: -gutter/2+'px'
            }
        },
        rowClass(){
            let {align} = this
            return [align && `align-${align}`]
        }
      },
      mounted(){
        this.$children.forEach((vm) => {
            vm.gutter = this.gutter
        })
      }
    }
</script>

<style lang="scss" scoped>
  .row{
    display: flex;

    &.align-left{
      justify-content:flex-start;
    }
    &.align-center{
      justify-content:center;
    }
    &.align-right{
      justify-content: flex-end;
    }
  }
</style>
