<script>
import Sidebar from '../../components/layout/Sidebar.vue';
import Nav from '../../components/layout/Nav.vue';
import Jogos from './GamesContent.vue';

export default {
  name: 'Home',
  components: {
    Sidebar,
    Nav,
    Jogos
  }
}
</script>


<template>
  <main>
    <Sidebar />
    <section class="d-flex flex-column">
      <Nav />
      <jogos />
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

</style>
