
const http = require('http');

http.createServer(function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let numero = {
        temperatura: Math.round(Math.random() * 10),
        nivel: Math.round(Math.random() * 10),
        pressao: Math.round(Math.random() * 10),
    };
    res.end(JSON.stringify(numero));
}).listen(8001, () => {
    console.log('Servidor rodando na porta 8001');
});
