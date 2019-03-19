<template>
  <div class="bf-input-wrapper" :class="{error}">
    <input type="text" :value="value" :disabled="disabled"/>
    <template v-if="error">
      <bf-icon icon-name="error" class="error-icon"></bf-icon>
      <span class="error-msg">{{ error }}</span>
    </template>
  </div>
</template>

<script>

  import bfIcon from '../icon/bficon.vue'

  export default {
    name: 'bf-input',
    data(){
      return {}
    },
    props: {
      value: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      error:{
        type: String
      }
    },
    components:{
        'bf-icon': bfIcon
    }
  }
</script>

<style lang="scss" scoped>

  $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $border-radius: 4px;
  $font-size: 14px;
  $input-shadow-color: rgba(0, 0, 0, 0.5);
  $red-msg: #F1453D;

  .bf-input-wrapper {
    display: inline-flex;
    align-items: center;
    font-size: $font-size;
    > :not(last-child){
      margin-right: .4em;
    }

    > input {
      height: $height;
      border: 1px solid $border-color;
      border-radius: $border-radius;
      padding: 0 8px;
      font-size: inherit;
      &:hover {
        border-color: $border-color-hover;
      }
      &:focus {
        outline: none;
        box-shadow: inset 0 1px 3px $input-shadow-color;
      }
      &[disabled] {
        border-color: #bbb;
        color: #bbb;
        cursor: not-allowed;
      }
    }
    &.error{
      > input{
        border-color: $red-msg;
      }
    }
    .error-icon{
      fill: $red-msg;
    }
    .error-msg{
      color: $red-msg;
    }
  }
</style>
