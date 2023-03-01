import express from 'express';
import { getAllProducts, getProductById } from '../services/products/productsService';

const router = express.Router();

router.get('/getAll' , (_req, res) => {
    try {
        res.send(getAllProducts())
    }
    catch(e){
        res.status(400).send(e)
    }
})

router.get('/:id' , (req, res) => {
    try {
        const productById = getProductById(Number(req.params.id))
        res.send(productById)
    }
    catch(e){
        res.status(400).send(e)
    }
})


export default router