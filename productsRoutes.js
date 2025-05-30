// src/routes/products.routes.js
const express = require('express');
const router = express.Router();
const ProductManager = require('../managers/ProductManager');
const pm = new ProductManager('./src/data/products.json');

// GET / - Listar todos los productos
router.get('/', async (req, res) => {
  const products = await pm.getProducts();
  res.json(products);
});

// GET /:pid - Obtener un producto por ID
router.get('/:pid', async (req, res) => {
  const product = await pm.getProductById(req.params.pid);
  product ? res.json(product) : res.status(404).send('Producto no encontrado');
});

// POST / - Crear un producto
router.post('/', async (req, res) => {
  const newProduct = await pm.addProduct(req.body);
  res.status(201).json(newProduct);
});

// PUT /:pid - Actualizar un producto
router.put('/:pid', async (req, res) => {
  const updated = await pm.updateProduct(req.params.pid, req.body);
  updated ? res.json(updated) : res.status(404).send('Producto no encontrado');
});

// DELETE /:pid - Eliminar un producto
router.delete('/:pid', async (req, res) => {
  const deleted = await pm.deleteProduct(req.params.pid);
  deleted ? res.send('Producto eliminado') : res.status(404).send('Producto no encontrado');
});

module.exports = router;
