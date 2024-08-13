const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();

// Serve arquivos estáticos
app.use(express.static(path.join(__dirname)));

// Rota para buscar todos os animes ou por título
app.get('/api/animes', async (req, res) => {
    try {
        const searchQuery = req.query.q; // Captura o termo de busca da query string
        const url = searchQuery 
            ? `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(searchQuery)}` 
            : 'https://api.jikan.moe/v4/anime';
        
        const response = await axios.get(url);
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
