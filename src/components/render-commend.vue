<template>
    <div>
        <div class="swipe-content" slot="recommend">
            <mt-swipe :auto="4000" :stopPropagation="true">
                <mt-swipe-item><img src="https://d3ccfh7gq800bn.cloudfront.net/bb_uploads/c0ad46f65c26392120c085e0a96b596a.jpg" alt=""></mt-swipe-item>
                <mt-swipe-item><img src="https://d3ccfh7gq800bn.cloudfront.net/bb_uploads/d99d443280dbab5310adfcb09c49b0b8.jpg" alt=""></mt-swipe-item>
                <mt-swipe-item><img src="https://d3ccfh7gq800bn.cloudfront.net/bb_uploads/9f5d601d68837c87015d0e9a3b62c365.jpg" alt=""></mt-swipe-item>
            </mt-swipe>
        </div>
    </div>
</template>
<script>
export default {
  name: '',
}
</script>
<style lang="stylus" scoped>
.swipe-content
  height 200px
  img 
    width 100%
    height auto
</style>
