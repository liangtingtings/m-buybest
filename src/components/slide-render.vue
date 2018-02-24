<template>
<div>
    <mt-tab-container v-model="active" :swipeable="true">
        <mt-tab-container-item id="tab-container1">
            <render-commend>
                <slot name="recommend"></slot>
            </render-commend>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
            <mt-cell  title="tab-container 2"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
            <mt-cell  title="tab-container 3"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container4">
            <mt-cell title="tab-container 4"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container5">
            <mt-cell title="tab-container 5"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container6">
            <mt-cell title="tab-container 6"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container7">
            <mt-cell title="tab-container 7"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container8">
            <mt-cell title="tab-container 8"></mt-cell>
        </mt-tab-container-item>
    </mt-tab-container>

    </div>

</template>
<script>
import renderCommend from './render-commend.vue'
export default {
  name: '',
  props: ['currentTabIndex'],
  data () {
      return {
          active : 'tab-container1'
      }
  },
  
  mounted () {
    
  },
  methods: {
      
  },
  watch: {
      currentTabIndex : function() {
          this._data.active = 'tab-container' + this.currentTabIndex
          this.$router.replace('/recommend/' + this.currentTabIndex)
      },
      active :function () {
          this.$emit("active", this._data.active)
      }
  },
  components: {
      renderCommend
  }
}
</script>
<style lang="stylus" scoped>
.page-swipe .mint-swipe {
    height: 500px;
    color: #000;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
}
.mint-tab-container{
    height:800px
}
.page-swipe .mint-swipe-item {
    // line-height: 200px;
}
.page-swipe .slide1 {
    background-color: #0089dc;
    color: #fff;
}
.page-swipe .slide2 {
    background-color: #ffd705;
    color: #000;
}
.page-swipe .slide3 {
    background-color: #ff2d4b;
    color: #fff;
}
.page-swipe-desc {
    text-align: center;
    color: #666;
    margin-bottom: 5px;
}

</style>
