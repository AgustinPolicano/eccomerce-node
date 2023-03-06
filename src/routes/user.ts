import express from "express";
const router = express.Router();
import UserModel, { UserSchema } from "../models/user.model";
import mongoose from "mongoose";
import { isCorrectPasword } from "../services/users/userService";
import passport from "passport";


router.get("/getAll", (_req, res) => {
  try {
    UserModel.find().then((items) => {
      res.send(items);
    });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/register", (req, res) => {
  try {
    let user = new UserModel();
    user.email = req.body.email;
    user.password = req.body.password;
    UserModel.findOne({ email: user.email }).then((p) => {
      if (p) {
        res.status(500).send("Ya existe una cuenta asociada con este email, ingresa otro.");
      } else {
        user.save().then((e) => {
          res.status(200).send('Cuenta creada con exito')
        })
      }
    });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/login", (req, res) => {
  try {
    const { email, password } = req.body;
    UserModel.findOne({ email: email }).then((p) => {
      if (p) {
        if (isCorrectPasword(password, p.password)) {
          res.status(200).send("Email autenticado correctamente");
        } else {
          res.status(500).send("Email y/o contraseña incorrectos");
        }
      } else {
        res.status(500).send("No existe el Email");
      }
    });
  } catch (e) {
    res.status(400).send(e);
  }
});

export default router;
