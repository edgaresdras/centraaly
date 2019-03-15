const express = require('express');
const app = express();
const port = 8080;
const chalk = require('chalk'); //Pintar mensajes en la consola
 
//Escuchar peticiones en un puerto
app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
    console.log(chalk.cyan(`http://localhost:${port}`));
});

//Rutas
app.get('/', (req, res) => {
    res.send('Estoy respondiendo algo');
});