<template>
  <div class="hello">
    HelloWorld! {{ himsg }}
    <Hi @Msg="setHiMsg" title="父级向子级传递"/>
    <p>Hello load count : {{ $store.state.count }}</p>
  </div>
</template>

<script>
import Hi from './Hi'

export default {
  name: 'Hello',
  data () {
    return {
      himsg: '',
      demoMsg: 'Demo message'
    }
  },
  components: {
    Hi
  },
  methods: {
    setHiMsg : function(data) {
      this.himsg = data
    },
    getDemoMsg: function(event) {
      this.$emit('DemoMsg', this.demoMsg)
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
