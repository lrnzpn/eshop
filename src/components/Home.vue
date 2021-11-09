<template>
  <div>
    <Header />
    <br><br>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Load />
  </div>
</template>

<script>
import Header from './Header.vue'
import Load from './Load.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Header,
    Load
  },
  data() {
    return {
      loads: []
    }
  }, 
  beforeMount() {
    axios.get('http://192.168.254.117:3000/').then((res) => {
      this.loads = res.data
      console.log('GET loads')
      console.log(res.data)
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
