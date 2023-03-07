import mongoose from "mongoose";
import jwt from "jsonwebtoken";

export const ensureToken = function ensureToken(req: any, res: any, next: any) {
  const bearerHeader = req.headers["authorization"];
  if(bearerHeader !== undefined){
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1]
    req.token = bearerToken
    jwt.verify(bearerToken,'my_secret_key', (err: any, user: any) => {
        console.log(user)
    }) // codigo que se encarga de verificar que usuario esta haciendo la peticion
    next()
  } else {
    res.status(403).send('Token no encontrado');
  }
};
