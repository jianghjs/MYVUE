<template>
  <div class="hello">
    HelloWorld!
    <br/>
    <el-input v-model="input" style="width:200px;" maxlength="5" placeholder="请输入内容"></el-input>
    <el-button v-on:click='click'>送信</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      input: '123'
    }
  },
  methods: {
    click : function() {
      this.input = 'abc'
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
