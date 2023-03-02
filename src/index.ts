import express from "express";
const app = express();
app.use(express.json());

import mongoose from "mongoose";
import UserModel from "./models/user.model";


const passwordDB = "DK0dW5yXKf421VU2";

import allProducts from "./routes/products";
import allusers from "./routes/user";

const PORT = 3000;

async function connectDB() {
  const db = await mongoose.connect(
    "mongodb+srv://policanoagus:DK0dW5yXKf421VU2@cluster0.tfjuvya.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("database connected to", db.connection.db.databaseName);

}

connectDB();

app.get("/ping", (req, res) => {
  console.log("ping");
  console.log("anashe");
  res.send("pong");
});

app.use("/api/products", allProducts);
app.use("/api/users", allusers);


app.listen(PORT, () => {
  console.log("server running on port ", PORT);
});
