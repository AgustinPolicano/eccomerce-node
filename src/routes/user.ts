import express from "express";
import {
  getAllProducts,
  getProductById,
} from "../services/products/productsService";


const router = express.Router();
import UserModel from "../models/user.model";

router.get("/getAll", (_req, res) => {
  try {
    UserModel.find().then((items) => {
      res.send(items);
    });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/", (req, res) => {
  try {
    let user = new UserModel();
    user.userName = req.body.userName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save().then((e) => {
      console.log(e);
    });
  } catch (e) {
    res.status(400).send(e);
  }
});

/* router.get('/:id' , (req, res) => {
    try {
        const productById = getProductById(Number(req.params.id))
        res.send(productById)
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
}) */

export default router;
