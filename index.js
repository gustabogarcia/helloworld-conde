// index.js

// importa la libreria express
const express = require('express');

// crea el objeto app
const app = express();

// la app responde con Hello world
// a todas las peticiones GET a /
app.get('/', (req, res) => {
  res.send('Hello world');
});

// el server escucha en el puerto 3066
app.listen(3066);
