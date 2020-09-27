<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="#">Core Docs</a></li>
      <li><a href="#">Forum</a></li>
      <li><a href="#"Community Chat</a></li>
      <li><a href="#">Twitter</a></li>
    </ul>
  </div>
</template>

<script>

import $ from 'jquery'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Netlify TEST App'
    }
  },
  mounted () {
    var _self = this

    _self.$snotify.success('Still works Example body content', 'do it do it do it')
    var links = $('a')
    console.log(links)
    $('a').click(function (s) {
      _self.$snotify.success('Still works Example body content', s.target.innerText)
    })
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
