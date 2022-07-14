const express = require('express');
const contenedor = require('./api');
const { Router } = express;


let productos = [
    {
        id: 1,
        nombre: 'Escoba',
        precio: 500
    }
]

let Producto = contenedor.Content;
let nuevoProducto = new Producto(productos);


const router = Router();

router.get ('/api/productos', async (req, res) => {
    res.send(nuevoProducto)
});

router.get('/api/productos/:id', async (req, res) => {
    if ( productos.id == ""){
        res.send({ error : 'producto no encontrado' }) 
    } else {
        const idProductos = await content.getById()
        res.send(idProductos)
    }

})

router.post('/api/productos', async (req, res) => {
        const productoAGuardar = req.body;
        productos.push(productoAGuardar); 
        res.status(201).send({status: 'ok'});
});

router.put('/api/productos/:id', async (req, res) => {
    const postProduct = await content.updateById()
    res.status(201).send(postProduct);
});

router.delete('/api/productos/:id', async (req, res) => {
    const productoAEliminar = await content.deleteById()
    res.status(201).send(productoAEliminar);
});

module.exports = router;