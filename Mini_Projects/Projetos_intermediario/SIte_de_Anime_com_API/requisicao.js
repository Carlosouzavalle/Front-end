async function fetchAnimes(query = '') {
    try {
        const response = await fetch(`/api/animes?q=${encodeURIComponent(query)}`);
        const animes = await response.json();

        const animeList = document.getElementById('anime-list');
        animeList.innerHTML = ''; // Limpa os resultados anteriores

        animes.slice(0, 15).forEach(anime => {
            const animeDiv = document.createElement('div');
            animeDiv.innerHTML = `
                <h4>${anime.title}</h4>
                <img src="${anime.images.jpg.image_url}" alt="${anime.title}" style="width:200px; height:300px">
                <h3>Score: ${anime.score}</h3>
            `;
            animeList.appendChild(animeDiv);
        });
    } catch (error) {
        console.error('Error fetching animes:', error);
    }
}

// Chama a função fetchAnimes sem query ao carregar a página
fetchAnimes();

// Adiciona um evento ao campo de busca
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', (event) => {
    const query = event.target.value;
    fetchAnimes(query); // Faz a busca com o termo digitado
});
