<template>
    <div>
        <div class="navigator-container" ref="viewport">
            <navigator :navList="navList" @change="change" ref="navigator">
                <span slot="item" slot-scope="props" class="tab-name" :class="{'link-active':isCurrent(props.index)}">{{props.text}}</span>
            </navigator>
            <slide-render :currentTabIndex="currentTabIndex"  @active="eventFromChild"></slide-render>
        </div>

    </div>
</template>

<script type="text/ecmascript-6">
import navigator from '../base/navigator/navigator.vue'
import slideRender from './slide-render.vue'
const navListEn = [
    {
        id: 1,
        name: '推荐'
    },
    {
        id: 2,
        name: '新品'
    },
    {
        id: 3,
        name: '限时购'
    },
    {
        id: 4,
        name: '居家'
    },
    {
        id: 5,
        name: '餐厨'
    },
    {
        id: 6,
        name: '洗护'
    },
    {
        id: 7,
        name: '奶制品'
    },
    {
        id: 8,
        name: '闪购'
    }
]

export default {
    data() {
        return {
            index: 0,
            navList: navListEn,  // 渲染的列表数据
            currentTabIndex: 1 // 当前默认tab
        }
    },
    methods: {
        isCurrent (index) {
            return index === this.currentTabIndex
        },
        eventFromChild (active) {
            let index = active.substr(active.length - 1, 1);
            this.currentTabIndex = Number(index);
            this.$refs.navigator.setNav(Number(index));
        },
        change (item) {
            if (item !== undefined) {
                this.currentTabIndex = item.id
            }

            // 以下部分编写点击相应的navList item时，渲染的逻辑代码
            this.$router.replace('/recommend/' + this.currentTabIndex)
        }
    },
    components: {
        navigator,
        slideRender
    }
}
</script>
<style lang='stylus' rel='stylesheet/stylus' type="text/stylus">
  .navigator-view
    .navigator-container
      height: 52px;
      background: #fff;
      box-shadow: 0 2px 3px rgba(0, 0, 0, .12)
      overflow: hidden;
    .tab-render-content
      position: absolute;
      left: 0;
      top: 50px;
      right: 0;
      bottom: 0;
      margin-top: 15px;
      padding: 15px;
      background: #fff;
      line-height: 20px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
</style>
