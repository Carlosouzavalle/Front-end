async function fetchAnimes() {
    try {
        const response = await fetch('/api/animes');
        const animes = await response.json();

        const animeList = document.getElementById('anime-list');

        animes.slice(0, 8).forEach(anime => {
            const animeDiv = document.createElement('div');
            animeDiv.innerHTML = `
                <h2>${anime.title}</h2>
                <img src="${anime.images.jpg.image_url}" alt="${anime.title}" style="width:200px; height:300px">
                <p>Score: ${anime.score}</p>
            `;
            animeList.appendChild(animeDiv);
        });
    } catch (error) {
        console.error('Error fetching animes:', error);
    }
}

fetchAnimes();
