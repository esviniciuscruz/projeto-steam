<script>
import Loading from '../../components/layout/Loading.vue';
import { fetchAllGames } from '../../Services/FetchAllGames.vue';
import { fetchGameId } from '../../Services/FetchGameId.vue';
import GameItem from './GameItem.vue';
export default {
  components: { GameItem, Loading },
    name: 'Games',
    data() {
        return {
            games: [], // initialize an empty array
            myGames: [],
            show: 4, // Amount of game it will show
            showLoading: true
        };
    },
    methods: {
        fetchGames() {
            fetchAllGames().then((data) => { // calls the fetch function
                this.games = data
            })
        }
    },
    mounted() {

        if(localStorage.getItem('Data')) {
            this.myGames = localStorage.getItem('Data')
            this.myGames = JSON.parse(this.myGames)
            this.myGames.forEach((myGame) => {
                this.myGames = []
                fetchGameId(myGame.gameId).then((game) => {
                    this.myGames.push(game)
                })
            })
        } else {
            this.myGames = null
        }
        this.showLoading = false
    }
}
</script>

<template>
    <div class="container text-white">
        <div>
            <h2 class="mt-4">Meus Jogos</h2>
            <section class="d-flex flex-row justify-content-around flex-wrap"> 
                <GameItem v-if="myGames[0]" :games="myGames"/>
                <h5 v-else class="text-left">Você não possui nenhum jogo!</h5>
            </section>
        </div>
        <loading v-if="showLoading"/>
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