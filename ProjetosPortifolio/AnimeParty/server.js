const express = require('express');
const path = require("path");
const axios = require('axios'); // Importa o Axios
const app = express();

// Configura o servidor Express para servir arquivos estáticos que estão na pasta public.
app.use(express.static(path.join(__dirname, 'public')));

// Rota para buscar dados da API
app.get('/api/anime', async (req, res) => {
    try {
        const response = await axios.get('https://api.jikan.moe/v4/anime');
        res.json(response.data); // Retorna os dados da API para o cliente
    } catch (error) {
        console.error('Error fetching data from API:', error);
        res.status(500).send('Error fetching data from API');
    }
});

const PORT =  3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
