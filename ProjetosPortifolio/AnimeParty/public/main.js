const container = document.querySelector('.container');

axios.get('https://api.jikan.moe/v4/anime')
    .then(response => {
        console.log(response.data);


        // aqui vai os dados das imagens
        const  animes = response.data.data
        animes.forEach(anime => {
            const img = document.createElement('img');
            img.src = anime.images.jpg.image_url; // URL da imagem do anime
            img.alt = anime.title; // Adiciona um texto alternativo com o título do anime
            container.appendChild(img); // Adiciona a imagem ao contêiner
        });

        
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        container.innerHTML = 'Error fetching data';
    });

