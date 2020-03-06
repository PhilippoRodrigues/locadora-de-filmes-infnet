<template>
  <div id="header" href="#">
     <b-navbar toggleable="lg" type="dark" variant="dark">
       <b-navbar-brand :to="{ name: 'home' }" >Locadora de Filmes</b-navbar-brand>
       <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
     </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>