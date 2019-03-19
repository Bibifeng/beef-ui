<template>
  <svg class="bf-icon"><use :xlink:href="`#i-${iconName}`"></use></svg>
</template>

<script>
    export default {
        name: 'bf-icon',
        data(){
            return {}
        },
        props:{
            iconName:{}
        }
    }
</script>

<style lang="scss" scoped>
  .bf-icon{
    width: 1em;
    height: 1em;
  }
</style>
