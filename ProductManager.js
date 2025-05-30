import fs from "fs"

class ProductManager{  

    constructor(pathFile){
        this.pathFile = pathFile;
    }

    async getProducts(){
        try {
            const fileData = await fs.promises.readFile(this.pathFile, "utf-8");
            const products = JSON.parse(fileData);
            return products;
        } catch (error) {
            throw new Error("Error al traer el producto", error.message);
            
        }
    }

    generateNewId(products) {
        if (products.length > 0) {
            return products[products.length - 1].id + 1;
        } else {
            return 1;
        }
    }
    
    async addProduct(newProduct){
        try {
            //Recuperar la data
            const fileData = await fs.promises.readFile(this.pathFile, "utf-8");
            const products = JSON.parse(fileData);
            
            const newId = this.generateNewId(products);
            //Editamos la data
            const product = {id: newId, ...newProduct};
            products.push(product); 

            //Guardamos el archivo
            await fs.promises.writeFile(this.pathFile, JSON.stringify(products, null, 2),"utf8");
        } catch (error) {
            throw new Error("Error al añadir el producto", error.message); 
        }
    }

    async getProductById(id) {
        try {
            const products = await this.getProducts();
            const product = products.find(prod => prod.id === id);
            
            if (!product) {
                console.log("Not found");
                return null;
            }
    
            return product;
        } catch (error) {
            console.error("Error al buscar el producto por ID:", error.message);
            throw error; // Podés relanzarlo si querés que lo manejen desde afuera
        }
    }
    
}

export default ProductManager;