<template>
  <div class="home">
    <b-row>
      <h1>Bem vinda a {{ title }}</h1>
    </b-row>
    <!--<b-row>
      <h3 v-if="horas >= 7 && horas < 17" id="aberta">ABERTA</h3>
      <h3 v-else-if="horas >= 17 && horas < 18" id="proxima-fechar">PRÓXIMA DE FECHAR</h3>
      <h3 v-else id="fechada">FECHADA</h3>
    </b-row>-->
    <b-row>
       <button type="button" class="btn btn-dark"  v-on:click="mostrarCarrinho">
         Carrinho: {{ quantidadeNoCarrinho }} filmes
       </button>
    </b-row>

    <b-row  v-if="mostrarFilmes">
      <div class="cards">
        <b-card  :key="filme.id" v-for="filme in filmes_obj"
          :title="filme.titulo"
          :id="filme.id"
          :img-src="filme.imagem"
          img-alt="Image"
          img-top
          tag="article"
          style="width: 14rem"
          class="mb-2"
        >
          <b-card-text>
            {{ filme.descricao }}    
          </b-card-text>
        

          <b-card-text>
            {{ filme.valor | formatarPreco("R$") }}    
          </b-card-text>

          <b-button variant="danger" @click="removeFilmeLista(filme.id)">Remover</b-button>
          <b-button href="#" @click="adicionarAoCarrinho(filme)"   v-if="validarPermissaoParaAdicionarNoCarrinho(filme)" variant="dark">Alugar</b-button>

          <b-button href="#"  v-else variant="dark" disabled> Alugar</b-button>
        </b-card>
      </div>
    </b-row>
    <b-row v-else>
      <h2>Carrinho</h2>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: { },
  data: function() {
   return {
     mostrarFilmes: true,
     carrinho: [],
     title: "Locadora de Filmes",
     horas: new Date().getHours(),
     filmes_obj: [
       { id: 1, titulo: "Vingadores", descricao: "Um filme de heróis", valor: 25, imagem: "https://cdn.telecineplay.com.br/isl/api/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27179657%27&EntityType=%27Item%27&EntityId=%2710807%27&Width=720&Height=1080&device=web_browser&subscriptions=Anonymous",   estoqueDisponivel: 3 
       },
       { id: 2, titulo: "Pantera Negra", descricao: "Um filme de panteras", valor: 35,   estoqueDisponivel: 3,imagem: "https://cdn.telecineplay.com.br/isl/api/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27182460%27&EntityType=%27Item%27&EntityId=%2710148%27&Width=720&Height=1080&device=web_browser&subscriptions=Anonymous" },
       { id: 3, titulo: "Homem-Formiga",   estoqueDisponivel: 3,descricao: "Um filme de formigas", valor: 20, imagem: "https://images-na.ssl-images-amazon.com/images/I/81wmxkmnbwL.jpg" },
       { id: 4, titulo: "Capitã Marvel",   estoqueDisponivel: 3,descricao: "Um filme de capitãs", valor: 40, imagem: "https://images-na.ssl-images-amazon.com/images/I/81wmxkmnbwL.jpg" },
       { id: 5, titulo: "Hulk",   estoqueDisponivel: 3,descricao: "Um filme de força", valor: 10, imagem: "data:image/jpeg;base64,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" },
      { id: 6, titulo: "Hulk",   estoqueDisponivel: 3, descricao: "Um filme de força", valor: 10, imagem:"https://br.web.img2.acsta.net/c_215_290/pictures/210/485/21048566_20131010182211313.jpg" }

     ],
     filmes: ['Vingadores', 'Homem de Ferro', 'Hulk', 'Pantera negra']
   }
 },
  methods: { 
    mostrarCarrinho() {
      this.mostrarFilmes = this.mostrarFilmes ? false : true;
    },
    removeFilmeLista: function(id){
      this.filmes_obj = this.filmes_obj.filter(elem => elem.id != id)
      return this.filmes_obj
    },
    adicionarAoCarrinho: function(filme) {
      this.carrinho.push(filme.id);
    },quantidadeNoCarrinhoPorFilme: function(filme) {
      return this.carrinho.filter(elem => elem === filme.id).length;
   },
   validarPermissaoParaAdicionarNoCarrinho: function(filme) {
     return filme.estoqueDisponivel > this.quantidadeNoCarrinhoPorFilme(filme);
    }
  },
  computed: {
    quantidadeNoCarrinho: function() {
      return this.carrinho.length;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cards{
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
}
.home{
    align-items: center;
}
.card{
  margin: 24px;
}
#aberta {
  color: blue;
}
 
#proxima-fechar {
  color: orange;
}
 
#fechada {
  color: red;
}
</style>
