<template>
    <button class="bf-btn" :class="{[`icon-${iconPosition}`]: true}" @click="btn2ClickTrigger">
      <bf-icon v-if="icon && !loading" :icon-name="icon" class="bficon"></bf-icon>
      <bf-icon v-if="loading" class="loading bficon" icon-name="loading"></bf-icon>
      <div class="slot-wrapper"><slot></slot></div>
    </button>
</template>

<script>

  import bfIcon from '../../icon/bficon.vue';

    export default {
        name: 'bf-btn',
        data(){
            return {}
        },
        props:{
            icon:{
              type:String,
            },
            iconPosition:{
              type: String,
              default: 'left',
              validator(val){
                return !(val !== 'left' && val !== 'right');
              }
            },
            loading:{
              type: Boolean,
              default: false,
            },
        },
        components:{
            'bf-icon':bfIcon,
        },
        methods:{
          btn2ClickTrigger(){
              this.$emit('click');
          }
        }
    }
</script>

<style lang="scss">
  @keyframes loadingSpin{
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }

  .bf-btn{
    font-size: 14px;
    height: 32px;
    padding: 0 1em;
    border-radius: 4px;
    border:1px solid #999;
    background: white;
    cursor: pointer;
    /*将bf-btn设置成弹性盒，解决button内的内容对齐*/
    display: inline-flex;
    justify-content: center;
    align-items: center;
    /*防止出现多个bf-btn同在一行时垂直不对齐*/
    vertical-align: middle;
    &:hover{
      border-color: #666;
    }
    &:active{
      background-color: #eee;
    }
    &:focus{
      outline: none;
    }
    /*默认icon和文字的位置顺序*/
    > .bficon{
      order: 1;
      margin-right: .2em;
    }
    > .slot-wrapper{
      order: 2;
    }
    /*根据用户的值来调整icon的位置*/
    &.icon-right{
      > .slot-wrapper{
        order: 1;
      }
      > .bficon{
        order: 2;
        margin-right: 0;
        margin-left: .2em;
      }
    }
    /*loading*/
    > .loading{
      animation: loadingSpin 1s infinite linear;
    }
  }


</style>
