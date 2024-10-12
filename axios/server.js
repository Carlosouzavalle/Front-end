const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware para servir arquivos estáticos
app.use(express.static('public'));

// Rota para a raiz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para buscar a imagem da Waifu API
app.get('/waifu', async (req, res) => {
    try {
        const response = await axios.get('https://api.waifu.pics/sfw/waifu');
        const imgUrl = response.data.url; // Pegue a URL da imagem retornada pela API
        res.json({ imgUrl }); // Envie a URL da imagem como resposta JSON
    } catch (error) {
        console.log('Houve um erro:', error);
        res.status(500).send('Erro ao buscar a imagem da Waifu API');
    }
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
