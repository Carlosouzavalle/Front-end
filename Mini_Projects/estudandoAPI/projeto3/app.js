window.document.getElementById("loadImages").addEventListener("click", fetchRandomImages);

async function fetchRandomImages() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; // Limpa a galeria antes de carregar novas imagens

    const numberOfImages = 5; // Defina o número de imagens que você quer exibir
    const arrayIMGS = [];

    // Faz 5 requisições simultâneas à API
    for (let i = 0; i < numberOfImages; i++) {
        arrayIMGS.push(fetch('https://api.waifu.pics/sfw/waifu'));
    }

    try {
        const responses = await Promise.all(arrayIMGS); // Espera todas as requisições serem completadas
        const data = await Promise.all(responses.map(response => response.json()));

        // Adiciona as imagens na galeria
        data.forEach(item => {
            const imgElement = document.createElement('img');
            imgElement.src = item.url;
            gallery.appendChild(imgElement);
        });
    } catch (error) {
        console.error('Error fetching images:', error);
    }
}
