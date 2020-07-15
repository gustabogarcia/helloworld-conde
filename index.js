// index.js

// importa la libreria express
const express = require('express');

// ponemos el puerto del server en una variable
const port = process.env.PORT || 3066;

// crea el objeto app
const app = express();

// agregamos esta línea
app.use(express.static('public'));

// la app responde con Hello world
// a todas las peticiones GET a /
app.get('/', (req, res) => {
  res.send('Hello world');
});

// el server escucha en el puerto 3066
app.listen(port);
