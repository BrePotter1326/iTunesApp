<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <ul>
    <li><router-link to="/home">Home</router-link></li>
    <li><router-link to="/iTunes">iTunes Search</router-link></li>
    <li><router-link to="/hello">Hello World</router-link></li>
    </ul>
    <!--<HomePage/>-->
    <router-view></router-view>
    <!--<HelloWorld/>-->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ItunesApp from './components/iTunes.vue'
import HomePage from './components/home.vue' 

export default {
  name: 'app',
  components: {
    HelloWorld,
    ItunesApp,
    HomePage
  }
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
#logo{
  width: 300px;
}
</style>
