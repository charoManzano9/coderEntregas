import express from 'express';
import ProductManager from './ProductManager.js';

const app = express();
const PORT = 3000;

// Middleware para JSON
app.use(express.json());

// Instancia de ProductManager con el path al archivo
const productManager = new ProductManager('./products.json');

// Ruta /products - devuelve todos los productos
app.get('/products', async (req, res) => {
    try {
        const products = await productManager.getProducts();
        res.json({ products });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ruta /products/:pid - devuelve el producto por ID
app.get('/products/:pid', async (req, res) => {
    try {
        const pid = parseInt(req.params.pid);
        const product = await productManager.getProductById(pid);

        if (!product) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }

        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
