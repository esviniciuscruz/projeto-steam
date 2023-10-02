<script>
import Aside from '../../components/layout/Aside.vue';
import Nav from '../../components/layout/Nav.vue';

export default {
  name: 'Home',
  components: {
    Aside,
    Nav
  }
}
</script>


<template>
  <main>

    <Nav />
  </main>
</template>

<style scoped>
    main {
      height: 100%;
      background-image: linear-gradient(to right, #193748, #1B2C42);
      padding: 20px 150px;
    }
</style>
