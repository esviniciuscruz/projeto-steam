<script>
export async function fetchAllGames() {
    const response = await fetch('https://www.freetogame.com/api/games'); // Method that fetches data from the API
    const data = await response.json();
    
    return data
}
</script>