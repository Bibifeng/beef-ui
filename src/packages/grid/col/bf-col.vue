<template>
  <div class="col" :class="colClasses" :style="colStyle">
      <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'bf-col',
    data(){
      return {
          gutter: 0,
      }
    },
    props: {
      span: {
        type: [Number, String]
      },
      offset: {
        type: [Number, String]
      }
    },
    computed:{
        colClasses(){
            let {span,offset} = this
            return [span && `col-${span}`, offset && `offset-${offset}`]
      },
        colStyle(){
            return {
              paddingLeft: this.gutter/2+'px',
              paddingRight: this.gutter/2+'px'
            }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .col {
    $class-prefix: col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%
      }
    }

    $class-prefix: offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24) * 100%
      }
    }

  }
</style>
