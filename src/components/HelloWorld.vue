<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="#" v-on:click="notify">Core Docs</a></li>
      <li><a href="#" v-on:click="notify">Forum</a></li>
      <li><a href="#" v-on:click="notify">Community Chat</a></li>
      <li><a href="#" v-on:click="notify">Twitter</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Netlify Vue.js App'
    }
  },
  mounted () {
    var _self = this
    _self.$snotify.success('Still works Example body content', 'do it do it do it')
  },
  methods: {
    notify (event) {
      var _self = this
      _self.$snotify.success('Still works Example body content', 'Hello ' + event.target.innerText + '!')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
