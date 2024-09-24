fetch('https://kitsu.io/api/edge/anime')
  .then(response => {

    // console.log(response)
    if (!response.ok) {
      throw new Error('Erro encontrado');
    }
    
    return response.json(); // Converte a resposta para JSON

  })

  .then(data => {
    const animes = data.data; // Acessa a lista de animes no JSON
    
    const containerDiv = document.getElementById('anime-container'); // Certifique-se de que existe uma <div> com id="anime-container"

    containerDiv.innerHTML = ''; // Limpa o conteúdo existente

    animes.forEach(anime => {
      // Cria um elemento <div> para cada anime
      const animeDiv = document.createElement('div');
      animeDiv.classList.add('anime-item'); // Adiciona uma classe para estilo, se necessário

      // Cria um elemento <img> para a imagem do anime
      const imgAnime = document.createElement('img');
      imgAnime.src = anime.attributes.posterImage.small; // Atribui o URL da imagem ao src do <img>





      
      // Adiciona a imagem dentro da <div> do anime
      animeDiv.appendChild(imgAnime);
      
      // Adiciona a <div> do anime ao container principal
      containerDiv.appendChild(animeDiv);
    });
    
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
