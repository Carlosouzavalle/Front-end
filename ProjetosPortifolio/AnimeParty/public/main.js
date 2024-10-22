const container = document.querySelector('.container');


// Algumas variaveis importantes
const body = document.getElementsByTagName('body')[0]; // Acessa o body corretamente
const Header = document.createElement('header');
const Logo = document.createElement('h1');
Logo.textContent = "Anime List"; // Adiciona um texto para o logo
Header.appendChild(Logo);
body.insertBefore(Header, body.firstChild); // Insere o header no início do body

//searchBox config
const SearchDivContainer = document.createElement('div')
SearchDivContainer.classList.add('SearchDivContainer')
const searchBox =  document.createElement('input')
const searchButton =  document.createElement('button')
searchBox.setAttribute('type', 'text')
searchBox.setAttribute('placeholder', 'O que você quer assistir?...')
searchBox.classList.add('searchBox')
searchButton.textContent = 'Buscar'
searchButton.classList.add('searchButton')
Header.appendChild(SearchDivContainer)
SearchDivContainer.appendChild(searchBox)
SearchDivContainer.appendChild(searchButton)


searchButton.addEventListener('click', () => {
    const query = searchBox.value.toLowerCase(); // Obtém o valor digitado pelo usuário
    const allAnimeContainers = document.querySelectorAll('.animeContainer');

    // Filtra os animes com base no texto digitado
    allAnimeContainers.forEach(container => {
        const animeTitle = container.querySelector('h2').textContent.toLowerCase();
        if (animeTitle.includes(query)) {
            container.style.display = 'block'; // Mostra o anime correspondente
        } else {
            container.style.display = 'none'; // Esconde os outros animes
        }
    });
});


function fetchAnimes(query = '') {
    // Limpa o conteúdo anterior do container
    container.innerHTML = '';

    // URL da API (com pesquisa se houver query)
    const apiUrl = query ? `https://api.jikan.moe/v4/anime?q=${query}` : 'https://api.jikan.moe/v4/anime';

    axios.get(apiUrl)
        .then(response => {
            console.log(response.data);

            // Aqui vão os dados das imagens
            const animes = response.data.data;
            animes.forEach(anime => {
                const animeContainer = document.createElement('div');
                const img = document.createElement('img');
                const animeName = document.createElement('h2');

                img.src = anime.images.jpg.image_url; // URL da imagem do anime
                img.alt = anime.title; // Adiciona um texto alternativo com o título do anime
                animeName.textContent = anime.title;

                // Adiciona classes ao container de cada anime
                animeContainer.classList.add('animeContainer');

                // Adiciona a imagem e o nome ao container de anime
                animeContainer.appendChild(img);
                animeContainer.appendChild(animeName);

                // Adiciona o container de anime ao contêiner principal
                container.appendChild(animeContainer);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            container.innerHTML = 'Error fetching data';
        });
}

    fetchAnimes();

    // Função de pesquisa quando o botão é clicado
    searchButton.addEventListener('click', () => {
        const query = searchBox.value.trim();
        fetchAnimes(query); // Faz nova busca na API com o termo de pesquisa
    });
    
    // Função de pesquisa ao pressionar Enter na search box
    searchBox.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            searchButton.click(); // Aciona a função de busca ao pressionar Enter
        }
    });