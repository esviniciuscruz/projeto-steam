<script>
export async function fetchGameId(gameId) {
    const response = await fetch(`https://www.freetogame.com/api/game?id=${gameId}`);
    const data = await response.json();

    return data
}
</script>