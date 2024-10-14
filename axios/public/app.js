document.getElementById('fetchImage').addEventListener('click', async () => {
    try {
        const response = await fetch('/waifu'); // Chama a rota /waifu
        const data = await response.json(); // Espera pela resposta JSON
        const imgUrl = data.imgUrl; // Obtém a URL da imagem
        const imageContainer = document.getElementById('imageContainer');
        imageContainer.innerHTML = ''; // Limpa o container anterior
        const img = document.createElement('img'); // Cria um elemento <img>
        img.classList.add('imgContainer')
        img.src = imgUrl; // Define a URL da imagem
        img.alt = 'Waifu Image'; // Texto alternativo para a imagem
        imageContainer.appendChild(img); // Adiciona a imagem ao container
    } catch (error) {
        console.error('Houve um erro:', error);
    }
});
