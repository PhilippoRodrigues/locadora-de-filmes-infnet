<template>
  <div id="header" href="#">
         <b-navbar toggleable="lg" type="dark" variant="dark">
    <router-link
           tag="h5"
           class="card-title"
           :to="{ name: 'home' }"
         ><b-navbar-brand >Locadora de Filmes</b-navbar-brand>
         </router-link>
    

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
     

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        


      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>
</template>

<script>

export default {

  name: 'Header',

}
</script>

<style>

</style>
