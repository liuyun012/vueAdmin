<!--
@Author: qinzhenxing
@Date:   2017-12-28T17:25:55+08:00
@Last modified by:   qinzhenxing
@Last modified time: 2018-01-02T18:18:20+08:00
-->

<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
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
  /*color: #2c3e50;*/
  width: 100%;
  height: 100vh;
  color: #000;
  background: #F9F9F9;
}
</style>
