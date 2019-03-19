<template>
    <div class="bf-input-wrapper">
      <input type="text"/>
    </div>
</template>

<script>
    export default {
        name: 'bf-input',
        data(){
            return {}
        }
    }
</script>

<style lang="scss" scoped>

  $height: 32px;
  $border-color: #999;

  .bf-input-wrapper{
    > input{
      height: $height;
      border: 1px solid $border-color;
    }
  }
</style>
