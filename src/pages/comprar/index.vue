<script>
import Nav from '../../components/layout/Nav.vue';
import Sidebar from '../../components/layout/Sidebar.vue'
import FormComprar from './FormComprar.vue';
export default {
  components: { Sidebar, Nav, FormComprar },
    
}
</script>

<template>
    <main>
      <sidebar />
      <section class="d-flex flex-column">
        <Nav />
        <FormComprar />
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