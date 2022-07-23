const express = require('express');
const { Router } = express;
const router = Router();

let productos = [
    {
        id: 1,
        nombre: 'Escoba',
        precio: 500
    },
    {
        id: 2,
        nombre: 'Jabon',
        precio: 200
    },
    {
        id: 3,
        nombre: 'Balde',
        precio: 500
    }
]


router.get ('/api/productos', async (req, res) => {
    res.send(productos)
});

router.get('/api/productos/:id', async (req, res) => {
    const { id } = req.params 
    if ( isNaN(id)){
        return res.status(400).send('No existe el id');
    } 
    const p = productos.find((e) => e.id == id)
    if (p == undefined){
        res.status(404).send({error: 'Producto no encontrado'});
        return
    }
    res.send(p)
})

router.post('/api/productos', async (req, res) => {
        const productoAGuardar = req.body;
        productos.push(productoAGuardar); 
        res.status(201).send({status: 'ok'});
});

router.put('/api/productos/:id', async (req, res) => {
    const productoAActualizar = req.body;
    const { id } = req.params
    if (isNaN(id)){
        res.status(400).send({ error: 'El parametro no es un numero'});
        return
    }
    const p = productos.find((e) => e.id == id)
    if (p == undefined){
        res.status(404).send({ error: 'Producto no encontrado'});
    }
    const index = productos.indexOf(p)
    productos[index] = productoAActualizar
    res.send ({statusPut: 'ok'})
});

router.delete('/api/productos/:id', async (req, res) => {
    const { id } = req.params
    if (isNan (id)){
        res.status(400).send({ error: 'El parametro no es un numero'});
        return
    }
    const p = productos.find((e) => e.id == id)
    if (p == undefined){
        res.status(400).send({ error: 'Producto no encontrado'})
        return
    }
    const index = productos.indexOf(p)
    productos.splice(index, 1)
    res.send({ statusDelete: 'ok'})
});

module.exports = router;