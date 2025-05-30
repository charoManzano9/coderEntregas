import ProductManager from "./ProductManager.js";

//METODO DE LA CLASE
const main = async()=>{
    try {
        const productManager = new ProductManager("./products.json");

        await productManager.addProduct({title: "Buso rojo", description: "Buso de invierno"});
        
        const products = await productManager.getProducts();
        console.log(products);

        // Buscar producto por ID
        const productById = await productManager.getProductById(1); // Cambiá el ID según el producto que tengas
        console.log("Producto con ID 1:", productById);
        
    } catch (error) {
        console.log(error);
        
    }
}

main();

//CON CHAT GPT
/*const main = async () => {
    try {
        const productManager = new ProductManager("./products.json");

        // Agregamos un producto (solo si querés seguir creando uno nuevo)
        await productManager.addProduct({
            title: "Buso rojo",
            description: "Buso de invierno",
            price: 1000,
            thumbnail: "img/buso-rojo.jpg",
            code: "BR001",
            stock: 10
        });

        // Mostrar todos los productos
        const products = await productManager.getProducts();
        console.log("Todos los productos:", products);

        // Buscar producto por ID
        const productById = await productManager.getProductById(1); // Cambiá el ID según el producto que tengas
        console.log("Producto con ID 1:", productById);

    } catch (error) {
        console.log("ERROR:", error.message);
    }
};

main();*/
