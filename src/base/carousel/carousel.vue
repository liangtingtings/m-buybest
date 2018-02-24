<template>
  <el-carousel height="180px" arrow="hover">
      <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
      </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  name: '',
}
</script>
<style lang="stylus" scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align center
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
