<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  height: 100%;
  /* font-family: "Avenir", Helvetica, Arial, sans-serif; */
  font-family: Arial, "Microsoft YaHei", "Microsoft Sans Serif",
    "Microsoft SanSerf", 微软雅黑;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 1200px;
  /* margin-top: 60px; */
}
</style>
