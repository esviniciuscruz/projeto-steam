<script>
import GameItem from './GameItem.vue';
export default {
  components: { GameItem },
    name: 'Games',
    data() {
        return {
            games: [], // initialize an empty array
            show: 4 // Amount of game it will show
        };
    },
    methods: {
        // Method that fetches data from the API
        async fetchGames() {
            const response = await fetch('https://www.freetogame.com/api/games');
            const data = await response.json();
            this.games = data;
        }
    },
    mounted() {
        this.fetchGames() // Method is called
    }
}
</script>

<template>
    <div class="container text-white">
        <div>
            <h2 class="mt-4">Destaques e Recomendados</h2>
            <section class="d-flex flex-row justify-content-around flex-wrap"> 
                <GameItem :games="games" :show="show"/>
            </section>
            <button @click="(show = show + 4), fetchGames">Mostrar mais</button>
            <button @click="(show = show > 3 ? show = 4 : show), fetchGames">Mostrar Menos</button>
        </div>
    </div>
</template>

<style scoped>
    .container {
        width: 90%;
        background-color: transparent;
    }

    .container h2 {
        font-size: 1.7em;
    }
    .jogo-container {
        background-image: linear-gradient(to top, #3799c4, #1B293A);
        cursor: pointer;
    }

    .jogo-container span {
        background-color: #4C6B22;
        color: #BEEE11;
        font-size: 1.8em;
        font-weight: bold;
        padding: 0px 10px;
    }

    button {
        margin: auto;
    }
</style>