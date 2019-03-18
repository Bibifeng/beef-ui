<template>
  <div class="wrapper">
    <a href="#" class="button"  id="btn1">
      <span class="line line-top"></span>
      <span class="line line-right"></span>
      <span class="line line-bottom"></span>
      <span class="line line-left"></span>
      {{ btn1Msg }}
      </a>
  </div>

</template>

<script>
    export default {
        name: 'bf-btn-line',
        data(){
            return {

            }
        },
      props:{
        btn1Msg:{
            default: '线性按钮一'
        }
      },
      methods:{

      },
      mounted(){

      }
    }
</script>

<style lang="scss" scoped>

  .wrapper{
    display: inline-block;
  }

  .button{
    display: block;
    position: relative;
    width: 180px;
    height: 50px;
    line-height: 46px;
    text-align: center;
    text-decoration: none;
    /*color: #8f6848;*/
    font-family: 微软雅黑;
    /*font-size: 20px;*/
    border: 2px solid  #8f6848;
    -o-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    transition: 0.6s ease;
    -webkit-transition: 0.6s ease;
    -moz-transition: 0.6s ease;
    -o-transition: 0.6s ease;
  }
  .button:hover{
    border: 2px solid #4e4e4e;
    color: white;
    background-color: #4e4e4e;
    text-decoration: none;
  }

  .button .line{
    display: block;
    position: absolute;
    background: none;
    transition: 0.7s ease;
    -webkit-transition: 0.7s ease;
    -moz-transition: 0.7s ease;
    -o-transition: 0.7s ease;
  }

  .button:hover .line{
    background: #4e4e4e;
  }

  .button .line-top{
    height: 2px;
    width: 0;
    left: -110%;
    top:-2px;
  }
  .button:hover .line-top{
    width:100%;
    left: -2px;
  }

  .button .line-right{
    width: 2px;
    height: 0;
    right: -2px;
    top:-110%;
  }
  .button:hover .line-right{
    height:100%;
    top: -2px;
  }

  .button .line-bottom{
    width: 0;
    height: 2px;
    bottom: -2px;
    right:-110%;
  }
  .button:hover .line-bottom{
    width:100%;
    right: -2px;
  }

  .button .line-left{
    width: 2px;
    height: 0;
    left: -2px;
    bottom:-110%;
  }
  .button:hover .line-left{
    height:100%;
    bottom: -2px;
  }

</style>
