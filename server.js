const express = require('express');
const path = require('path')

// inicializo la webapp
const app = express(); 

/*
  Busco el archivo requerido.
  Si es vacio devuelve index.html
*/
app.use(express.static(path.join(__dirname, 'public')))

// si no encuentra el archivo, devuelve la pagina de error
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'public', '404.html'))
})

const PORT = 8080

// inicio el servidor
app.listen(PORT, () => {
    console.log(`LISTO. El servidor esta escuchando en el puerto ${PORT}!`);
});