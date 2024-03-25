// const http = require("http");
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((request, response) => {
//     response.statusCode = 200;
//     response.setHeader('Content-Type', 'text/plain');
//     response.end('Bienvenido al servidor');
// });
// server.listen(port,hostname, () =>{
//     console.log(`Servidor corriendo en http://${hostname}:${port}/`);
// });

// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((request, response) => {
//   const filePath = path.join(__dirname, 'main.jsx');

//   fs.readFile(filePath, (error, content) => {
//     if (error) {
//       response.writeHead(500);
//       response.end('Error interno del servidor');
//     } else {
//       response.writeHead(200, { 'Content-Type': 'text/jsx' });
//       response.end(content, 'utf-8');
//     }
//   });
// });

// server.listen(port, hostname, () => {
//   console.log(`Servidor corriendo en http://${hostname}:${port}/`);
// });
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos desde la carpeta 'dist'
app.use(express.static(path.join(__dirname, 'dist')));

// Ruta para todas las solicitudes, sirve el index.html de tu SPA
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
