<template>
  <div id="app">
    <m-header></m-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <m-footer></m-footer>
  </div>
</template>

<script>
import mHeader from './components/header'
import mFooter from './components/footer'
export default {
  name: 'app',
  data() {
    return {}
  },
  components: {
    mHeader,
    mFooter
  }
}
</script>

<style></style>
