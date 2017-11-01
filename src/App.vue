<template>
  <div id="app">
  	<v-header></v-header>
  	<tab></tab>
    <keep-alive>
  	  <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import MHeader from './components/m-header/m-header'
  import Tab from './components/tab/tab.vue'

  export default {
    components: {
      'v-header': MHeader,
      Tab
    }
  }
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'></style>
