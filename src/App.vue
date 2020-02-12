<template>
  <div id="app">
    <b-container>
      <h1> {{ title }}</h1>
     <!-- <b-row>
       <b-list-group>
          <b-list-group-item v-for="filme in filmes" v-bind:key="filme">
            {{ filme }}
          </b-list-group-item>
       </b-list-group>
      </b-row>-->
     <b-row class="cards">
           <b-card v-for="filme in filmes_obj" v-bind:key="filme.id"
              :title="filme.titulo"
              img-src="https://modomeu.com/wp-content/uploads/2019/03/Capit%C3%A3-Marvel-ModoMeu-1024x576.jpeg"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-3"
            >
              <b-card-text class="center">
                {{filme.descricao}}.
              </b-card-text>
              <b-card-text>
                {{filme.valor}}
              </b-card-text>
              <b-button href="#" variant="info">Alugar</b-button>

            </b-card>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}, 
  data(){
    return {
      title : "Locadora de Filmes",
      filmes : ['Vingadores', 'Homem de Ferro', 'Hulk', 'Pantera negra'],
      filmes_obj: [
       { id: 1, titulo: "Vingadores", descricao: "Um filme de heróis", valor: 25, imagem: "./assets/logo.png" },
       { id: 2, titulo: "Pantera Negra", descricao: "Um filme de panteras", valor: 35, imagem: "assets/logo.png" },
       { id: 3, titulo: "Homem-Formiga", descricao: "Um filme de formigas", valor: 20, imagem: "assets/logo.png" },
       { id: 4, titulo: "Capitã Marvel", descricao: "Um filme de capitãs", valor: 40, imagem: "assets/logo.png" },
       { id: 5, titulo: "Hulk", descricao: "Um filme de força", valor: 10, imagem: "assets/logo.png" }
     ]
    }
  }
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
