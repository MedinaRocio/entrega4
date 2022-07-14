const express = require('express');
const router = require('./modulo/productos')

const app = express();

app.use(express.json())
app.use(express.urlencoded( { extended: true }))

app.use('/api', router);

app.listen(8080, () => console.log('Iniciando servidor'));

app.use('/paginas_estaticas', express.static('public'));