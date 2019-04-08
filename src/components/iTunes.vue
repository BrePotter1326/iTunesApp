<template>
  <div class="main">
  <h1 v-if="true"v-bind:title="hiddenMessage">Welcome to the iTunes App {{inputText}}</h1>
  <button v-on:click="showAlert()">Click</button>
  <button v-on:click="toggleTitle()">title</button>
  <hr>
  <input type="text" v-model="inputText">
  </div>
</template>

<script>
export default {
  name: 'ItunesApp',
  props: {
    msg: String
  },
  data() {
    return{
      inputText: '',
      title: "Hey Ya'll!",
      message:"This is a message",
      hiddenMessage:"This a hidden ninja",
      hasTitle: true
      }
  },
  methods: {
    showAlert(){
      alert(this.message);
    },
    toggleTitle(){
      this.hasTitle =!this.hasTitle
    }
  },
  getItuneData(){
    fetch()
    .then()
    .then()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
