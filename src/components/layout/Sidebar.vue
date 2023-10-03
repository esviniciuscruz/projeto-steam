<script>
export default {
    name: 'Sidebar'
}
</script>

<template>
  <div class="d-flex flex-column align-items-flex-start pb-3 mb-3 link-dark text-decoration-none sidebar">
    <h5>RECOMENDAÇÕES</h5>
    <ul>
      <li>De amigos</li>
      <li>De curadores</li>
      <li>Marcadores</li>
    </ul>
    <h5>CATEGORIAS</h5>
    <ul>
      <li>Mais vendidos</li>
      <li>Novidades</li>
      <li>Próximos lançamentos</li>
      <li>Promoções</li>
      <li>Jogos de R.V.</li>
      <li>Compatíveis com comando</li>
      <li>Excelentes no Deck</li>
    </ul>
    <h5>VER POR GÉNERO</h5>
    <ul>
      <li>Grátis para Jogar</li>
      <li>Acesso Antecipado</li>
      <li>Aventura</li>
      <li>Ação</li>
      <li>Casual</li>
      <li>Corridas</li>
      <li>Desporto</li>
      <li>Estratégia</li>
      <li>Indie</li>
      <li>Multijogador em Massa</li>
      <li>RPG</li>
      <li>Simulação</li>
    </ul>
  </div>
    <!-- <div class="flex-shrink-0 p-3" style="width: 280px;">
    <a href="/" class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
      <svg class="bi me-2" width="30" height="24"><use xlink:href="#bootstrap"/></svg>
      <span class="fs-5 fw-semibold custom">Collapsible</span>
    </a>
    <ul class="list-unstyled ps-0">
      <li class="mb-1">
        <button class="btn btn-toggle align-items-center rounded collapsed custom" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
          Home
        </button>
        <div class="collapse show" id="home-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" class="link-dark rounded custom">Overview</a></li>
            <li><a href="#" class="link-dark rounded custom">Updates</a></li>
            <li><a href="#" class="link-dark rounded custom">Reports</a></li>
          </ul>
        </div>
      </li>
      <li class="mb-1">
        <button class="btn btn-toggle align-items-center rounded collapsed custom" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
          Dashboard
        </button>
        <div class="collapse" id="dashboard-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" class="link-dark rounded custom">Overview</a></li>
            <li><a href="#" class="link-dark rounded custom">Weekly</a></li>
            <li><a href="#" class="link-dark rounded">Monthly</a></li>
            <li><a href="#" class="link-dark rounded">Annually</a></li>
          </ul>
        </div>
      </li>
      <li class="mb-1">
        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
          Orders
        </button>
        <div class="collapse" id="orders-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" class="link-dark rounded">New</a></li>
            <li><a href="#" class="link-dark rounded">Processed</a></li>
            <li><a href="#" class="link-dark rounded">Shipped</a></li>
            <li><a href="#" class="link-dark rounded">Returned</a></li>
          </ul>
        </div>
      </li>
      <li class="border-top my-3"></li>
      <li class="mb-1">
        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
          Account
        </button>
        <div class="collapse" id="account-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" class="link-dark rounded">New...</a></li>
            <li><a href="#" class="link-dark rounded">Profile</a></li>
            <li><a href="#" class="link-dark rounded">Settings</a></li>
            <li><a href="#" class="link-dark rounded">Sign out</a></li>
          </ul>
        </div>
      </li>
    </ul>
  </div> -->
</template>

<style scoped>

  .sidebar {
    margin-top: 70px;
  }

  .sidebar h5{
    color: #536E84 !important;
    font-size: 1.1em;
    font-weight: bold;
    margin-top: 20px;
  }

  .sidebar ul {
    padding: 0px;
  }

  .sidebar li {
    list-style-type: none;
    color: #7A8B9D;
    font-size: .9em;
    cursor: pointer;
  }

  .sidebar li:hover {
    color: #66c0f4;
  }
</style>