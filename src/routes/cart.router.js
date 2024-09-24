import { Router } from "express";
import { v4 as uuidv4 } from 'uuid';

const router = Router();

let cart = [];

router.get("/", (req, res) => {
    res.json(cart);
})

router.post("/", (req, res) => {
   const cart = [] = req.body;
})



export default router;