<template>
  <section class="nav-bar">
    <router-link tag="div" class="tab-item" to="/recommend">
      <div class="nav-icon index-nav-bg "></div>
    </router-link>
    <router-link tag="div" class="tab-item" to="/mall">
      <div class="nav-icon shop-nav-bg "></div>
    </router-link>
    <router-link tag="div" class="tab-item" to="/post">
      <div class="nav-icon post-nav-bg"></div>
    </router-link>
    <router-link tag="div" class="tab-item" to="/user">
      <div class="nav-icon user-nav-bg"></div>
    </router-link>
  </section>
</template>
<script>
export default {
  name: '',
}
</script>
<style lang="stylus" scoped>
@import "../common/stylus/variable"
  .nav-bar
    background:$color-background
    width:100%
    position fixed
    bottom:0
    height 1.4rem
    display:flex
    justify-content space-around
    align-items center 
    border-top:1px solid #ebebeb
    .tab-item
      width:25%
    .index-nav-bg
      background: url('../common/image/index-default.png') center no-repeat;
    .shop-nav-bg
      background: url("../common/image/shop-default.png") center no-repeat;
    .post-nav-bg
      background: url('../common/image/post-default.png') center no-repeat;
    .user-nav-bg
      background: url('../common/image/user-default.png') center no-repeat;
    .nav-icon
      width  1.64rem
      height 1.5rem
      background-size cover
      background-position center
      margin auto
    .router-link-active
      .index-nav-bg
        background-image url("../common/image/index-active.png")
      .shop-nav-bg
        background-image url("../common/image/shop-active.png")
      .post-nav-bg
        background-image url("../common/image/post-active.png")
      .messages-nav-bg
        background-image url("../common/image/messages-active.png")
      .user-nav-bg
        background-image url("../common/image/user-active.png")
</style>
