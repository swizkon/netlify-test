<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <vue-snotify />
    <div>
      Some links:
      https://github.com/vuejs/vue-rx

      https://www.learnrxjs.io/learn-rxjs/operators/creation/interval
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
