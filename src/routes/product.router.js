import { Router } from "express";
import { v4 as uuidv4 } from 'uuid';

const router = Router();

let products = [];

//Obtener todos los recursos
router.get("/", (req, res) => {
    res.json(products);
})


//Obtener un solo recurso
router.get("/product/:id", (req, res) => {
    const prodId = req.params.id;
    const product = products.find(product => product.id === prodIdBuscado);

    if(!product){
        return res.status(404).json({
            error: "No se encontro el producto" 
        })
    }
    res.json(product);
})


//Crear nuevo producto
router.post("/", (req, res) => {
   const {title,description,price,status,stock,category,thumbnail} = req.body;

   if(!title || !description || !price || !status || !stock || !category){
       return res.status(400).json({
           error: "Todos los campos son obligatorios"
       })
   }
   const newProduct = {
       id: uuidv4(),
       title,
       description,
       price,   
       status,
       stock,
       category,
       thumbnail
       
   }
   products.push(newProduct);
   res.status(201).json(newProduct)
})
  router.put("/:id", (req, res) => {
    const prodId = req.params.id;
    const {title,description,price,status,stock,category,thumbnail} = req.body;
    const productIndex = products.findIndex(product => product.id === prodId);

    if(productIndex === -1){
        return res.status(404).json({
            error: "No se encontro el producto"
        })
    }

    products[productIndex] = {
        ...products[productIndex],
        title,
        description,
        price,   
        status,
        stock,
        category,
        thumbnail
    }
    res.json(products[productIndex]);

})
router.delete("/:id", (req, res) => {
    const prodId = req.params.id;
    const productIndex = products.findIndex(product => product.id === prodId);

    if(productIndex === -1){    
        return res.status(404).json({
            error: "No se encontro el producto"
        })    
    }
    products.splice(productIndex, 1);
    res.json({message: "Producto eliminado"});
})


export default router