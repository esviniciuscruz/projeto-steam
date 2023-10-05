<script>
import { RouterLink } from 'vue-router';
import Nav from '../../components/layout/Nav.vue';
import Sidebar from '../../components/layout/Sidebar.vue';
import { fetchGameId } from '../../services/FetchGameId.vue';

export default {
    name: 'InfoGame',
    components: { Sidebar, Nav, Nav, Sidebar, RouterLink },
    data() {
      return {
        game: [],
        gameId: ''
      }
    },
    mounted() {
      this.gameId = this.$route.params.id
      fetchGameId(this.gameId).then((data) => {
          this.game = data
      })
  },
}
</script>

<template>
<main>
    <Sidebar />
    <section class="d-flex flex-column">
      <Nav />
      <div class="d-flex flex-column align-items-center px-5 py-5 gap-3 text-white">
        <img :src="game.thumbnail" alt="img game" class="my-2 custom-img" >
        <h1>{{ game.title }}</h1>
        <p>Descrição: {{ game.short_description }}</p>
        <h4>Plataforma: {{ game.platform }}</h4>
        <h4>Editora: {{ game.publisher }}</h4>
        <h4>Desenvolvedor: {{ game.developer }}</h4>
        <h4>Data de lançamento: {{ game.release_date }}</h4>
        <h2>Preço: R$ 97,00</h2>
        <RouterLink :to="'/purchase/' + game.id" type="button" class="btn btn-success">Comprar</RouterLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
    main {
      display: flex;
      height: 100%;
      background-image: linear-gradient(to right, #193748, #1B2C42);
      padding: 20px 150px;
    }

    .custom-img {
      width: 500px;
    }

</style>
