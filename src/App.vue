<template>
  <div id="app">
    <b-container>
       <Home/>
    </b-container>
  </div>
</template>

<script>

import Home from './components/Home.vue'
export default {

  name: 'App',
  components: {Home}, 

}
</script>

<style>
#app{
  margin: 40px;
  font-family: 'Inconsolata', monospace;
}
.cards{
  justify-content: space-between;
  text-align: center;
}
h1 {
  text-align: center;
  padding: 24px;
}
</style>
