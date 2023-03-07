import express from "express";
const app = express();
app.use(express.json());

import mongoose from "mongoose";
import UserModel from "./models/user.model";
import jwt from "jsonwebtoken"

const passwordDB = "DK0dW5yXKf421VU2";

import allProducts from "./routes/products";
import allusers from "./routes/user";
import { ensureToken } from "./config/auth";

const PORT = 3000;


async function connectDB() {
  const db = await mongoose.connect(
    "mongodb+srv://policanoagus:DK0dW5yXKf421VU2@cluster0.tfjuvya.mongodb.net/?retryWrites=true&w=majority", {
      autoIndex: true,
    }
  );
  console.log("database connected to", db.connection.db.databaseName);
}
connectDB();

app.use("/api/products", allProducts);
app.use("/api/users", allusers);

app.get("/api/protected", ensureToken, (req, res) => {
  res.json({
    text: 'protected'
  })
});


app.listen(PORT, () => {
  console.log("server running on port ", PORT);
});




