import express from 'express';
import { v4 as uuidv4 } from 'uuid';


import productsRouter  from './routes/product.router.js';
import  cartRouter  from './routes/cart.router.js';

const app = express();
const server = app.listen(8080, () => console.log('Servidor escuchando en el puerto 8080'));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))   

app.use('/api/products', productsRouter);
app.use('/api/cart', cartRouter);