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

      _self.$snotify.confirm('Example body content', 'Example title', {
        timeout: 5000,
        showProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        buttons: [
          {text: 'Yes', action: () => console.log('Clicked: Yes'), bold: false},
          {text: 'No', action: () => console.log('Clicked: No')},
          {text: 'Later', action: (toast) => { console.log('Clicked: Later'); _self.$snotify.remove(toast.id) }},
          {text: 'Close', action: (toast) => { console.log('Clicked: No'); _self.$snotify.remove(toast.id) }, bold: true}
        ]
      })
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
