const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();

// Serve arquivos estáticos
app.use(express.static(path.join(__dirname)));

// Rota para buscar os animes
app.get('/api/animes', async (req, res) => {
    try {
        const response = await axios.get('https://api.jikan.moe/v4/anime');
        const animes = response.data.data;
        res.json(animes);
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});

// Rota para servir o arquivo HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
