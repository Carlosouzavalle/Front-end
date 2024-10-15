document.getElementById('fetchImage').addEventListener('click', async () => {
    try {
        const response = await fetch('/waifu'); // Chama a rota /waifu
        const data = await response.json(); // Espera pela resposta JSON
        const imgUrl = data.imgUrl; // Obtém a URL da imagem
        const imageContainer = document.getElementById('imageContainer');
        imageContainer.innerHTML = ''; // Limpa o container anterior

        const qtdImgs = 5; // quantidade de imgs no array
        const imgArraywaifu = [];

        for (let i = 0; i < qtdImgs; i++) {
            imgArraywaifu.push(fetch('https://api.waifu.pics/sfw/waifu'));
        }

        try {
            const responses = await Promise.all(imgArraywaifu); // Espera todas as requisições serem completadas
            const data = await Promise.all(responses.map(response => response.json()));

            // Adiciona as imagens na galeria
            data.forEach(item => {
                const img = document.createElement('img'); // Cria um elemento <img>
                img.classList.add('imgContent'); // Adiciona a classe imgContent
                img.src = item.url; // Define a URL da imagem
                img.alt = 'Waifu Image'; // Texto alternativo para a imagem

                // Adiciona evento de clique para focar/desfocar a imagem
                img.addEventListener('click', () => {
                    // Remove a classe de foco de todas as imagens
                    const allImages = document.querySelectorAll('.imgContent');
                    allImages.forEach(image => {
                        image.classList.remove('imgFocused');
                        image.classList.add('imgBlurred'); // Adiciona desfoque a todas as imagens
                    });

                    // Adiciona a classe de foco à imagem clicada
                    img.classList.add('imgFocused');
                    img.classList.remove('imgBlurred'); // Remove desfoque da imagem focada
                });

                imageContainer.appendChild(img); // Adiciona a imagem ao container
            });
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    } catch (error) {
        console.error('Houve um erro:', error);
    }
});
