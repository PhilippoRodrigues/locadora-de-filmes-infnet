<template>
  <div id="app">
    <Header />
    <b-container>
    <router-view />
    </b-container>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {

  name: 'App',
  components: {Header}, 

}
</script>

<style>
#app{
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
