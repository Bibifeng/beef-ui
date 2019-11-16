<template>
  <div id="app">
    <div style="border:1px solid black;">

    <bf-row gutter="20">
      <bf-col span="2">1</bf-col>
      <bf-col span="22">2</bf-col>
    </bf-row>
    <bf-row gutter="20">
      <bf-col span="3">1</bf-col>
      <bf-col span="14">
        <bf-row gutter="10">
          <bf-col>5</bf-col>
          <bf-col>5</bf-col>
          <bf-col>5</bf-col>
        </bf-row>
      </bf-col>
      <bf-col span="7">2</bf-col>
    </bf-row>
    <bf-row gutter="20">
      <bf-col>1111111111111</bf-col>
      <bf-col>2</bf-col>
      <bf-col>2</bf-col>
      <bf-col>2</bf-col>
    </bf-row>
    <bf-row>
      <bf-col span="3">1</bf-col>
      <bf-col span="10" offset="4">2</bf-col>
      <bf-col span="7">2</bf-col>
    </bf-row>
    <bf-row>
      <bf-col span="3">1</bf-col>
      <bf-col span="6" offset="4">2</bf-col>
      <bf-col span="8" offset="3">2</bf-col>
    </bf-row>
    </div>

    <div class="box">
      <bf-btn-line></bf-btn-line>
    </div>
    <div class="box">
      <bf-btn>常规按钮</bf-btn>
      <bf-btn :loading="loading1" @click="loading1 = !loading1">按钮二</bf-btn>
      <bf-btn icon="settings">按钮二</bf-btn>
      <bf-btn icon="settings" :loading="true">按钮二</bf-btn>
      <bf-btn icon="like" icon-position="right">按钮二</bf-btn>
      <bf-btn icon="like" icon-position="right" :loading="true">按钮二</bf-btn>
      <bf-btn-group>
        <bf-btn icon-position="left" icon="left">上一页</bf-btn>
        <bf-btn>更多</bf-btn>
        <bf-btn icon-position="right" icon="right">下一页</bf-btn>
      </bf-btn-group>
    </div>
    <div class="box">
      <bf-icon icon-name="download"></bf-icon>
      <bf-icon icon-name="user"></bf-icon>
      <bf-icon icon-name="delete"></bf-icon>
      <bf-icon icon-name="form"></bf-icon>
      <bf-icon icon-name="bianji"></bf-icon>
      <bf-icon icon-name="info"></bf-icon>
    </div>
    <div class="box">
      <bf-input></bf-input>
      <bf-input :disabled="true"></bf-input>
    </div>
    <div class="box">
      <bf-input error="出错啦！"></bf-input>
    </div>
    <div class="box">
      <bf-input @change="inputChange"></bf-input>
    </div>
    <div class="box">
      <bf-tabs selected="1">
        <bf-tabs-head>
          <bf-tabs-item name="1">1</bf-tabs-item>
          <bf-tabs-item name="2">2</bf-tabs-item>
        </bf-tabs-head>
          <bf-tabs-body>
            <bf-tabs-pane name="1">content 1</bf-tabs-pane>
            <bf-tabs-pane name="2">content 2</bf-tabs-pane>
          </bf-tabs-body>
      </bf-tabs>
    </div>
    <div class="box">
      <bf-popover>
        <bf-btn>上方弹出</bf-btn>
        <template slot="content"> 弹出内容</template>
      </bf-popover>
      <bf-popover position="bottom">
        <bf-btn>下方弹出</bf-btn>
        <template slot="content"> 弹出内容</template>
      </bf-popover>
      <bf-popover position="left">
        <bf-btn>左边弹出</bf-btn>
        <template slot="content"> 弹出内容</template>
      </bf-popover>
      <bf-popover position="right">
        <bf-btn>右边弹出</bf-btn>
        <template slot="content"> 弹出内容</template>
      </bf-popover>
    </div>
    <div class="box">
      <bf-popover trigger="hover">
        <bf-btn>上方弹出</bf-btn>
        <template slot="content"> 弹出内容</template>
      </bf-popover>

      <bf-popover position="bottom" trigger="hover">
        <bf-btn>下方弹出</bf-btn>
        <template slot="content"> 弹出内容</template>
      </bf-popover>

      <bf-popover position="left" trigger="hover">
        <bf-btn>左边弹出</bf-btn>
        <template slot="content"> 弹出内容</template>
      </bf-popover>

      <bf-popover position="right" trigger="hover">
        <bf-btn>右边弹出</bf-btn>
        <template slot="content"> 弹出内容</template>
      </bf-popover>
    </div>
  </div>
</template>

<script>

  import btn1 from './packages/button/btn1/btn1.vue'
  import btn2 from './packages/button/btn2/btn2.vue'
  import bfIcon from './packages/icon/bficon.vue'
  import bfBtnGroup from './packages/button/btn-group/btn-group.vue'
  import bfInput from './packages/input/bf-input.vue'
  import bfRow from './packages/grid/row/bf-row.vue'
  import bfCol from './packages/grid/col/bf-col.vue'
  import bfTabs from './packages/tabs/bf-tabs/bf-tabs.vue'
  import bfTabsBody from './packages/tabs/bf-tabs-body/bf-tabs-body.vue'
  import bfTabsHead from './packages/tabs/bf-tabs-head/bf-tabs-head.vue'
  import bfTabsItem from './packages/tabs/bf-tabs-item/bf-tabs-item.vue'
  import bfTabsPane from './packages/tabs/bf-tabs-pane/bf-tabs-pane.vue'
  import bfPopover from  './packages/popover/bf-popover.vue'
export default {
  name: 'app',
  data () {
    return {
        'loading1':false,
    }
  },
  components:{
    'bf-btn-line': btn1,
    'bf-btn': btn2,
    'bf-icon': bfIcon,
    'bf-btn-group': bfBtnGroup,
    'bf-input': bfInput,
    'bf-row': bfRow,
    'bf-col': bfCol,
    'bf-tabs':bfTabs,
    'bf-tabs-body':bfTabsBody,
    'bf-tabs-head':bfTabsHead,
    'bf-tabs-item':bfTabsItem,
    'bf-tabs-pane':bfTabsPane,
    'bf-popover':bfPopover
  },
  methods:{
    inputChange(val){
      console.log(val);
    }
  }
}
</script>

<style lang="scss">

  /*为了开发方便，后期酌情删除*/
  #app{
  margin-left: 150px;
  margin-top: 50px;
  }
  .box{
    margin-top: 20px;
  }
  /*  ------结束-------- */

</style>
