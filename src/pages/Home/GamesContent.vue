<script>
import { fetchAllGames } from '../../Services/FetchAllGames.vue';
import { fetchGameId } from '../../services/FetchGameId.vue';
import GameItem from './GameItem.vue';
export default {
  components: { GameItem },
    name: 'Games',
    data() {
        return {
            games: [], // initialize an empty array
            myGames: [],
            show: 4 // Amount of game it will show
        };
    },
    mounted() {
        fetchAllGames().then((data) => { // calls the fetch function
            this.games = data
        })

        this.myGames = localStorage.getItem('Data')
        this.myGames = JSON.parse(this.myGames)
        this.myGames.forEach((myGame) => {
            this.myGames = []
            fetchGameId(myGame.gameId).then((game) => {
                
            })
        })
    }
}
</script>

<template>
    <div class="container text-white">
        <div>
            <h2 class="mt-4">Destaques e Recomendados</h2>
            <section class="d-flex flex-row justify-content-around flex-wrap"> 
                <GameItem :games="games"/>
            </section>
            <button @click="(show = show + 4), fetchGames">Mostrar mais</button>
            <button @click="(show = show > 3 ? show = 4 : show), fetchGames">Mostrar Menos</button>
        </div>
        <div>
            <h2 class="mt-4">Meus Jogos:</h2>
            <section class="d-flex flex-row justify-content-around flex-wrap"> 
                <GameItem :games="games"/>
            </section>
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