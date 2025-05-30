// src/app.js
const express = require('express');
const app = express();
const PORT = 8080;

const productsRouter = require('./routes/productsRoutes');
const cartsRouter = require('./routes/productsRoutes');

app.use(express.json());

app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
